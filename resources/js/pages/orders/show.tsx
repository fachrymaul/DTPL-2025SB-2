import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    CheckCircle,
    Clock,
    Download,
    XCircle,
} from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

type Transaction = {
    id: number;
    status: string;
    amount: number;
    payment_method: string;
    bank_name: string;
    account_name: string;
    account_number: string;
    notes: string | null;
    paid_at: string | null;
};

type OrderItem = {
    id: number;
    quantity: number;
    price: number;
    variant_name: string | null;
    ticket: {
        id: number;
        name: string;
        category: string;
    };
};

type Order = {
    id: number;
    order_number: string;
    total: number;
    status: string;
    created_at: string;
    items: OrderItem[];
    transaction: Transaction | null;
};

type Props = {
    order: Order;
};

function formatRupiah(amount: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}

function statusIcon(status: string) {
    switch (status) {
        case 'completed':
            return <CheckCircle className="h-5 w-5 text-green-500" />;
        case 'cancelled':
            return <XCircle className="h-5 w-5 text-red-500" />;
        default:
            return <Clock className="h-5 w-5 text-yellow-500" />;
    }
}

function statusLabel(status: string) {
    const labels: Record<string, string> = {
        pending: 'Menunggu Verifikasi',
        completed: 'Selesai',
        cancelled: 'Dibatalkan',
        verified: 'Terverifikasi',
        rejected: 'Ditolak',
    };
    return labels[status] || status;
}

export default function OrderShow({ order }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Pesanan Saya', href: '/pesanan' },
        { title: order.order_number, href: `/pesanan/${order.id}` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Pesanan ${order.order_number}`} />
            <div className="mx-auto max-w-4xl p-4 sm:p-6">
                <Link
                    href="/pesanan"
                    className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Kembali ke Pesanan
                </Link>

                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        {statusIcon(order.status)}
                        <div>
                            <h1 className="text-2xl font-bold">
                                {order.order_number}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {statusLabel(order.status)} &middot;{' '}
                                {new Date(order.created_at).toLocaleDateString(
                                    'id-ID',
                                    {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    },
                                )}
                            </p>
                        </div>
                    </div>
                    <a
                        href={`/pesanan/${order.id}/invoice`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        <Download className="h-4 w-4" />
                        Unduh Invoice PDF
                    </a>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Items */}
                    <div className="rounded-xl border border-border bg-card p-5">
                        <h2 className="mb-4 font-semibold">Detail Tiket</h2>
                        <div className="space-y-3">
                            {order.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between text-sm"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {item.ticket.name}
                                        </p>
                                        {item.variant_name && (
                                            <p className="text-xs text-muted-foreground">
                                                {item.variant_name}
                                            </p>
                                        )}
                                        <p className="text-muted-foreground">
                                            {item.quantity}x{' '}
                                            {formatRupiah(item.price)}
                                        </p>
                                    </div>
                                    <span className="font-medium">
                                        {formatRupiah(
                                            item.quantity * item.price,
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 border-t border-border pt-4">
                            <div className="flex justify-between">
                                <span className="font-semibold">Total</span>
                                <span className="text-lg font-bold text-primary">
                                    {formatRupiah(order.total)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Payment info */}
                    {order.transaction && (
                        <div className="rounded-xl border border-border bg-card p-5">
                            <h2 className="mb-4 font-semibold">
                                Info Pembayaran
                            </h2>
                            <dl className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        Metode
                                    </dt>
                                    <dd className="font-medium">
                                        Transfer Bank
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        Bank Pengirim
                                    </dt>
                                    <dd className="font-medium">
                                        {order.transaction.bank_name}
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        Nama Rekening
                                    </dt>
                                    <dd className="font-medium">
                                        {order.transaction.account_name}
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        No. Rekening
                                    </dt>
                                    <dd className="font-medium">
                                        {order.transaction.account_number}
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">
                                        Status Pembayaran
                                    </dt>
                                    <dd className="font-medium">
                                        {statusLabel(order.transaction.status)}
                                    </dd>
                                </div>
                                {order.transaction.notes && (
                                    <div className="flex justify-between">
                                        <dt className="text-muted-foreground">
                                            Catatan
                                        </dt>
                                        <dd className="font-medium">
                                            {order.transaction.notes}
                                        </dd>
                                    </div>
                                )}
                                {order.transaction.paid_at && (
                                    <div className="flex justify-between">
                                        <dt className="text-muted-foreground">
                                            Dibayar pada
                                        </dt>
                                        <dd className="font-medium">
                                            {new Date(
                                                order.transaction.paid_at,
                                            ).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
