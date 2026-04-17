import { Head, Link } from '@inertiajs/react';
import { Package } from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

type Transaction = {
    id: number;
    status: string;
    amount: number;
    payment_method: string;
};

type OrderItem = {
    id: number;
    quantity: number;
    price: number;
    variant_name: string | null;
    ticket: {
        id: number;
        name: string;
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
    orders: Order[];
};

function formatRupiah(amount: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
}

function statusBadge(status: string) {
    const map: Record<string, string> = {
        pending:
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        completed:
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };
    const labels: Record<string, string> = {
        pending: 'Menunggu',
        completed: 'Selesai',
        cancelled: 'Dibatalkan',
    };
    return (
        <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${map[status] || 'bg-muted text-muted-foreground'}`}
        >
            {labels[status] || status}
        </span>
    );
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Pesanan Saya', href: '/pesanan' },
];

export default function OrdersIndex({ orders }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pesanan Saya" />
            <div className="mx-auto max-w-4xl p-4 sm:p-6">
                <h1 className="mb-6 text-2xl font-bold">Pesanan Saya</h1>

                {orders.length === 0 ? (
                    <div className="py-20 text-center">
                        <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                        <p className="text-lg font-medium text-muted-foreground">
                            Belum ada pesanan
                        </p>
                        <Link
                            href="/tiket"
                            className="mt-4 inline-flex rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                            Beli Tiket
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <Link
                                key={order.id}
                                href={`/pesanan/${order.id}`}
                                className="block rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/50"
                            >
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-sm font-medium">
                                                {order.order_number}
                                            </span>
                                            {statusBadge(order.status)}
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {new Date(
                                                order.created_at,
                                            ).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {order.items
                                                .map(
                                                    (i) =>
                                                        `${i.ticket.name}${i.variant_name ? ` — ${i.variant_name}` : ''} (x${i.quantity})`,
                                                )
                                                .join(', ')}
                                        </p>
                                    </div>
                                    <span className="text-lg font-bold text-primary">
                                        {formatRupiah(order.total)}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
