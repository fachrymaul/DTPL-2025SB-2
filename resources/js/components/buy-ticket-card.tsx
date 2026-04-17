import { Link, router, usePage } from '@inertiajs/react';
import { ShoppingCart, Ticket } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

type Variant = {
    id: number;
    name: string;
    price: number;
    unit: string | null;
};

type TicketData = {
    id: number;
    name: string;
    price: number;
    quota: number;
    variants?: Variant[];
};

type Props = {
    ticket: TicketData | null;
    accentColor?: string;
};

function formatRupiah(amount: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}

export default function BuyTicketCard({
    ticket,
    accentColor = 'text-primary',
}: Props) {
    const { auth } = usePage().props;
    const variants = ticket?.variants ?? [];
    const firstVariant = variants[0] ?? null;
    const [variantId, setVariantId] = useState<number | null>(
        firstVariant?.id ?? null,
    );
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);

    if (!ticket || !firstVariant || variantId === null) return null;

    const selectedVariant =
        variants.find((v) => v.id === variantId) ?? firstVariant;

    function addToCart() {
        setLoading(true);
        router.post(
            '/keranjang',
            { ticket_variant_id: variantId, quantity },
            {
                preserveScroll: true,
                onFinish: () => setLoading(false),
            },
        );
    }

    return (
        <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-2">
                <Ticket className={`h-5 w-5 ${accentColor}`} />
                <h3 className="text-lg font-semibold">Beli Tiket</h3>
            </div>
            <p className="text-sm text-muted-foreground">{ticket.name}</p>
            <p className="mt-2 text-2xl font-bold text-primary">
                {formatRupiah(selectedVariant.price)}
                {selectedVariant.unit && (
                    <span className="text-sm font-normal text-muted-foreground">
                        {' '}
                        / {selectedVariant.unit}
                    </span>
                )}
            </p>

            {ticket.quota <= 10 && ticket.quota > 0 && (
                <p className="mt-1 text-xs text-destructive">
                    Sisa {ticket.quota} tiket
                </p>
            )}

            {auth.user ? (
                <div className="mt-4 space-y-3">
                    {variants.length > 1 && (
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                                Pilih Variasi Tiket
                            </label>
                            <div className="space-y-2">
                                {variants.map((v) => (
                                    <label
                                        key={v.id}
                                        className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2 text-sm transition-colors ${
                                            v.id === variantId
                                                ? 'border-primary bg-primary/5'
                                                : 'border-border hover:bg-accent'
                                        }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="variant"
                                                value={v.id}
                                                checked={v.id === variantId}
                                                onChange={() =>
                                                    setVariantId(v.id)
                                                }
                                                className="h-4 w-4"
                                            />
                                            <span>
                                                {v.name}
                                                {v.unit && (
                                                    <span className="text-muted-foreground">
                                                        {' '}
                                                        / {v.unit}
                                                    </span>
                                                )}
                                            </span>
                                        </span>
                                        <span className="font-semibold">
                                            {formatRupiah(v.price)}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="qty"
                            className="text-sm text-muted-foreground"
                        >
                            Jumlah:
                        </label>
                        <select
                            id="qty"
                            className="rounded-lg border border-border bg-background px-2 py-1 text-sm"
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(parseInt(e.target.value))
                            }
                        >
                            {Array.from(
                                { length: Math.min(10, ticket.quota) },
                                (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ),
                            )}
                        </select>
                    </div>
                    <Button
                        onClick={addToCart}
                        className="w-full"
                        disabled={loading || ticket.quota === 0}
                    >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {ticket.quota === 0
                            ? 'Tiket Habis'
                            : loading
                              ? 'Menambahkan...'
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
        </div>
    );
}
