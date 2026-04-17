import { Head, Link, router } from '@inertiajs/react';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

type CartItem = {
    ticket_id: number;
    ticket_variant_id: number;
    quantity: number;
    ticket: {
        id: number;
        name: string;
        description: string;
        category: string;
        price: number;
    };
    variant: {
        id: number;
        name: string;
        price: number;
        unit: string | null;
    };
    subtotal: number;
};

type Props = {
    items: CartItem[];
    total: number;
};

function formatRupiah(amount: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Keranjang', href: '/keranjang' },
];

export default function CartIndex({ items, total }: Props) {
    function updateQuantity(variantId: number, quantity: number) {
        router.patch(
            `/keranjang/${variantId}`,
            { quantity },
            { preserveScroll: true },
        );
    }

    function removeItem(variantId: number) {
        router.delete(`/keranjang/${variantId}`, { preserveScroll: true });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Keranjang" />
            <div className="mx-auto max-w-4xl p-4 sm:p-6">
                <h1 className="mb-6 text-2xl font-bold">Keranjang Belanja</h1>

                {items.length === 0 ? (
                    <div className="py-20 text-center">
                        <ShoppingCart className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                        <p className="text-lg font-medium text-muted-foreground">
                            Keranjang kosong
                        </p>
                        <Link
                            href="/tiket"
                            className="mt-4 inline-flex rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                            Lihat Tiket
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.ticket_variant_id}
                                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex-1">
                                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary capitalize">
                                        {item.ticket.category}
                                    </span>
                                    <h3 className="mt-1 font-semibold">
                                        {item.ticket.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.variant.name}
                                        {item.variant.unit && (
                                            <>
                                                {' '}
                                                &middot; {item.variant.unit}
                                            </>
                                        )}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {formatRupiah(item.variant.price)} /
                                        tiket
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.ticket_variant_id,
                                                    Math.max(
                                                        1,
                                                        item.quantity - 1,
                                                    ),
                                                )
                                            }
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="w-8 text-center text-sm font-medium">
                                            {item.quantity}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.ticket_variant_id,
                                                    Math.min(
                                                        10,
                                                        item.quantity + 1,
                                                    ),
                                                )
                                            }
                                            disabled={item.quantity >= 10}
                                        >
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                    </div>

                                    <span className="min-w-[100px] text-right font-semibold">
                                        {formatRupiah(item.subtotal)}
                                    </span>

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-destructive hover:text-destructive"
                                        onClick={() =>
                                            removeItem(item.ticket_variant_id)
                                        }
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}

                        <div className="mt-6 rounded-xl border border-border bg-card p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold">
                                    Total
                                </span>
                                <span className="text-xl font-bold text-primary">
                                    {formatRupiah(total)}
                                </span>
                            </div>
                            <div className="mt-4 flex gap-3">
                                <Link
                                    href="/tiket"
                                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
                                >
                                    Lanjut Belanja
                                </Link>
                                <Link
                                    href="/checkout"
                                    className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
