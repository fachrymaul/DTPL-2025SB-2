import { Head, Link, router, usePage } from '@inertiajs/react';
import { Mountain, ShoppingCart, Ticket } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import WisataNavbar from '@/components/wisata-navbar';

type Variant = {
    id: number;
    name: string;
    price: number;
    unit: string | null;
};

type TicketItem = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    quota: number;
    image: string | null;
    variants: Variant[];
};

type Props = {
    tickets: TicketItem[];
    cart: { ticket_variant_id: number; quantity: number }[];
    selectedCategory: string | null;
};

function formatRupiah(amount: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}

export default function TicketsIndex({
    tickets,
    cart,
    selectedCategory,
}: Props) {
    const { auth, cartCount } = usePage().props;
    const [quantities, setQuantities] = useState<Record<number, number>>({});
    const [selectedVariants, setSelectedVariants] = useState<
        Record<number, number>
    >({});

    const categories = [
        { value: '', label: 'Semua' },
        { value: 'wisata', label: 'Wisata' },
        { value: 'atraksi', label: 'Atraksi' },
    ];

    function getVariantId(ticket: TicketItem): number | null {
        return selectedVariants[ticket.id] ?? ticket.variants[0]?.id ?? null;
    }

    function addToCart(ticket: TicketItem) {
        const variantId = getVariantId(ticket);
        if (variantId === null) return;
        const qty = quantities[ticket.id] || 1;
        router.post(
            '/keranjang',
            { ticket_variant_id: variantId, quantity: qty },
            {
                preserveScroll: true,
            },
        );
    }

    function getCartQty(ticket: TicketItem): number {
        const variantIds = ticket.variants.map((v) => v.id);
        return cart
            .filter((c) => variantIds.includes(c.ticket_variant_id))
            .reduce((sum, c) => sum + c.quantity, 0);
    }

    return (
        <>
            <Head title="Beli Tiket" />
            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar />

                <main className="mx-auto max-w-7xl px-6 py-12">
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                Beli Tiket
                            </h1>
                            <p className="mt-1 text-muted-foreground">
                                Pilih tiket wisata dan atraksi Desa Manud Jaya
                            </p>
                        </div>
                        {auth.user && (
                            <Link
                                href="/keranjang"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Keranjang ({cartCount as number})
                            </Link>
                        )}
                    </div>

                    {/* Category filter */}
                    <div className="mb-8 flex gap-2">
                        {categories.map((cat) => (
                            <Link
                                key={cat.value}
                                href={
                                    cat.value
                                        ? `/tiket?category=${cat.value}`
                                        : '/tiket'
                                }
                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                    (selectedCategory || '') === cat.value
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted text-muted-foreground hover:bg-accent'
                                }`}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </div>

                    {/* Ticket grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {tickets.map((ticket) => {
                            const inCart = getCartQty(ticket);
                            const variantId = getVariantId(ticket);
                            const selectedVariant = ticket.variants.find(
                                (v) => v.id === variantId,
                            );
                            return (
                                <div
                                    key={ticket.id}
                                    className="overflow-hidden rounded-xl border border-border bg-card"
                                >
                                    <div className="flex h-40 items-center justify-center bg-muted">
                                        {ticket.image ? (
                                            <img
                                                src={ticket.image}
                                                alt={ticket.name}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <Ticket className="h-12 w-12 text-muted-foreground/50" />
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <div className="mb-1 flex items-center gap-2">
                                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary capitalize">
                                                {ticket.category}
                                            </span>
                                            {ticket.quota <= 10 && (
                                                <span className="text-xs text-destructive">
                                                    Sisa {ticket.quota}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="mt-2 font-semibold text-card-foreground">
                                            {ticket.name}
                                        </h3>
                                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                                            {ticket.description}
                                        </p>

                                        {ticket.variants.length > 1 && (
                                            <div className="mt-3">
                                                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                                                    Variasi
                                                </label>
                                                <select
                                                    className="w-full rounded-lg border border-border bg-background px-2 py-1.5 text-sm"
                                                    value={variantId ?? ''}
                                                    onChange={(e) =>
                                                        setSelectedVariants({
                                                            ...selectedVariants,
                                                            [ticket.id]:
                                                                parseInt(
                                                                    e.target
                                                                        .value,
                                                                ),
                                                        })
                                                    }
                                                >
                                                    {ticket.variants.map(
                                                        (v) => (
                                                            <option
                                                                key={v.id}
                                                                value={v.id}
                                                            >
                                                                {v.name} —{' '}
                                                                {formatRupiah(
                                                                    v.price,
                                                                )}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                            </div>
                                        )}

                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-lg font-bold text-primary">
                                                {formatRupiah(
                                                    selectedVariant?.price ??
                                                        ticket.price,
                                                )}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {selectedVariant?.unit
                                                    ? `/ ${selectedVariant.unit}`
                                                    : '/ orang'}
                                            </span>
                                        </div>

                                        {auth.user ? (
                                            <div className="mt-4 flex items-center gap-2">
                                                <select
                                                    className="rounded-lg border border-border bg-background px-2 py-1.5 text-sm"
                                                    value={
                                                        quantities[ticket.id] ||
                                                        1
                                                    }
                                                    onChange={(e) =>
                                                        setQuantities({
                                                            ...quantities,
                                                            [ticket.id]:
                                                                parseInt(
                                                                    e.target
                                                                        .value,
                                                                ),
                                                        })
                                                    }
                                                >
                                                    {Array.from(
                                                        {
                                                            length: Math.min(
                                                                10,
                                                                ticket.quota,
                                                            ),
                                                        },
                                                        (_, i) => (
                                                            <option
                                                                key={i + 1}
                                                                value={i + 1}
                                                            >
                                                                {i + 1}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                                <Button
                                                    onClick={() =>
                                                        addToCart(ticket)
                                                    }
                                                    className="flex-1"
                                                    size="sm"
                                                    disabled={
                                                        ticket.quota === 0
                                                    }
                                                >
                                                    <ShoppingCart className="mr-1 h-4 w-4" />
                                                    {ticket.quota === 0
                                                        ? 'Habis'
                                                        : 'Tambah ke Keranjang'}
                                                </Button>
                                            </div>
                                        ) : (
                                            <Link
                                                href="/login"
                                                className="mt-4 block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                            >
                                                Login untuk Membeli
                                            </Link>
                                        )}

                                        {inCart > 0 && (
                                            <p className="mt-2 text-center text-xs text-muted-foreground">
                                                {inCart} tiket di keranjang
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {tickets.length === 0 && (
                        <div className="py-20 text-center text-muted-foreground">
                            <Ticket className="mx-auto mb-4 h-12 w-12" />
                            <p className="text-lg font-medium">
                                Belum ada tiket tersedia
                            </p>
                        </div>
                    )}
                </main>

                <footer className="border-t border-border">
                    <div className="mx-auto max-w-7xl px-6 py-8">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <Mountain className="h-4 w-4 text-primary" />
                            <span>&copy; 2026 Desa Manud Jaya</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
