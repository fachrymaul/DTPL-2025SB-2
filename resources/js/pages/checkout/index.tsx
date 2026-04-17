import { Head, Link, useForm } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import type { BreadcrumbItem } from '@/types';

type CartItem = {
    ticket_id: number;
    ticket_variant_id: number;
    quantity: number;
    ticket: {
        id: number;
        name: string;
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
    { title: 'Checkout', href: '/checkout' },
];

export default function CheckoutIndex({ items, total }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        bank_name: '',
        account_name: '',
        account_number: '',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/checkout');
    }

    if (items.length === 0) {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Checkout" />
                <div className="mx-auto max-w-4xl p-6 text-center">
                    <p className="text-muted-foreground">Keranjang kosong.</p>
                    <Link
                        href="/tiket"
                        className="mt-4 inline-flex rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                        Lihat Tiket
                    </Link>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Checkout" />
            <div className="mx-auto max-w-4xl p-4 sm:p-6">
                <h1 className="mb-6 text-2xl font-bold">Checkout</h1>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Order summary */}
                    <div className="rounded-xl border border-border bg-card p-5">
                        <h2 className="mb-4 font-semibold">
                            Ringkasan Pesanan
                        </h2>
                        <div className="space-y-3">
                            {items.map((item) => (
                                <div
                                    key={item.ticket_variant_id}
                                    className="flex items-center justify-between text-sm"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {item.ticket.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {item.variant.name}
                                        </p>
                                        <p className="text-muted-foreground">
                                            {item.quantity}x{' '}
                                            {formatRupiah(item.variant.price)}
                                        </p>
                                    </div>
                                    <span className="font-medium">
                                        {formatRupiah(item.subtotal)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 border-t border-border pt-4">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold">
                                    Total
                                </span>
                                <span className="text-xl font-bold text-primary">
                                    {formatRupiah(total)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Payment form */}
                    <div className="rounded-xl border border-border bg-card p-5">
                        <h2 className="mb-4 font-semibold">
                            Pembayaran via Transfer Bank
                        </h2>

                        <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                                Transfer ke rekening berikut:
                            </p>
                            <div className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                                <p>
                                    Bank: <strong>BCA</strong>
                                </p>
                                <p>
                                    No. Rekening: <strong>1234567890</strong>
                                </p>
                                <p>
                                    Atas Nama: <strong>Desa Manud Jaya</strong>
                                </p>
                                <p>
                                    Jumlah:{' '}
                                    <strong>{formatRupiah(total)}</strong>
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="bank_name">
                                    Nama Bank Pengirim
                                </Label>
                                <Input
                                    id="bank_name"
                                    placeholder="Contoh: BCA, BNI, Mandiri"
                                    value={data.bank_name}
                                    onChange={(e) =>
                                        setData('bank_name', e.target.value)
                                    }
                                />
                                <InputError message={errors.bank_name} />
                            </div>

                            <div>
                                <Label htmlFor="account_name">
                                    Nama Pemilik Rekening
                                </Label>
                                <Input
                                    id="account_name"
                                    placeholder="Nama sesuai rekening"
                                    value={data.account_name}
                                    onChange={(e) =>
                                        setData('account_name', e.target.value)
                                    }
                                />
                                <InputError message={errors.account_name} />
                            </div>

                            <div>
                                <Label htmlFor="account_number">
                                    Nomor Rekening
                                </Label>
                                <Input
                                    id="account_number"
                                    placeholder="Nomor rekening pengirim"
                                    value={data.account_number}
                                    onChange={(e) =>
                                        setData(
                                            'account_number',
                                            e.target.value,
                                        )
                                    }
                                />
                                <InputError message={errors.account_number} />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing
                                    ? 'Memproses...'
                                    : 'Konfirmasi Pembayaran'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
