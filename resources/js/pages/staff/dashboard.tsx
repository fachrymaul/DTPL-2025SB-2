import { Head, router, usePage } from '@inertiajs/react';
import {
    Ban,
    CheckCircle,
    Clock,
    CreditCard,
    DollarSign,
    Download,
    Package,
    ShoppingCart,
    XCircle,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
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
    };
};

type Order = {
    id: number;
    order_number: string;
    total: number;
    status: string;
    created_at: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
    items: OrderItem[];
    transaction: Transaction | null;
};

type Stats = {
    total_orders: number;
    pending_orders: number;
    completed_orders: number;
    cancelled_orders: number;
    total_transactions: number;
    pending_transactions: number;
    verified_transactions: number;
    rejected_transactions: number;
    total_revenue: number;
};

type Props = {
    stats: Stats;
    recentOrders: Order[];
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
    { title: 'Staff Dashboard', href: '/staff/dashboard' },
];

export default function StaffDashboard({ stats, recentOrders }: Props) {
    const { flash } = usePage().props;
    const [processingId, setProcessingId] = useState<number | null>(null);
    const [notes, setNotes] = useState<Record<number, string>>({});

    function updateTransaction(
        transactionId: number,
        status: 'verified' | 'rejected',
    ) {
        setProcessingId(transactionId);
        router.patch(
            `/staff/transactions/${transactionId}`,
            { status, notes: notes[transactionId] || '' },
            {
                preserveScroll: true,
                onFinish: () => setProcessingId(null),
            },
        );
    }

    const statCards = [
        {
            label: 'Total Pesanan',
            value: stats.total_orders,
            icon: ShoppingCart,
            color: 'text-blue-500',
        },
        {
            label: 'Pesanan Pending',
            value: stats.pending_orders,
            icon: Clock,
            color: 'text-yellow-500',
        },
        {
            label: 'Pesanan Selesai',
            value: stats.completed_orders,
            icon: CheckCircle,
            color: 'text-green-500',
        },
        {
            label: 'Pesanan Dibatalkan',
            value: stats.cancelled_orders,
            icon: Ban,
            color: 'text-red-500',
        },
        {
            label: 'Total Transaksi',
            value: stats.total_transactions,
            icon: CreditCard,
            color: 'text-purple-500',
        },
        {
            label: 'Transaksi Pending',
            value: stats.pending_transactions,
            icon: Clock,
            color: 'text-orange-500',
        },
        {
            label: 'Transaksi Verified',
            value: stats.verified_transactions,
            icon: CheckCircle,
            color: 'text-emerald-500',
        },
        {
            label: 'Total Pendapatan',
            value: formatRupiah(stats.total_revenue),
            icon: DollarSign,
            color: 'text-green-600',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Staff Dashboard" />
            <div className="mx-auto max-w-7xl p-4 sm:p-6">
                <h1 className="mb-2 text-2xl font-bold">Staff Dashboard</h1>
                <p className="mb-6 text-muted-foreground">
                    Monitor dan kelola transaksi pesanan.
                </p>

                {(flash as Record<string, string>)?.success && (
                    <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">
                        {(flash as Record<string, string>).success}
                    </div>
                )}

                {/* Stats grid */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {statCards.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl border border-border bg-card p-4"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`rounded-lg bg-muted p-2 ${stat.color}`}
                                >
                                    <stat.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        {stat.label}
                                    </p>
                                    <p className="text-xl font-bold">
                                        {stat.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent orders */}
                <h2 className="mb-4 text-lg font-semibold">Pesanan Terbaru</h2>
                <div className="space-y-4">
                    {recentOrders.length === 0 ? (
                        <div className="py-12 text-center text-muted-foreground">
                            <Package className="mx-auto mb-3 h-10 w-10" />
                            <p>Belum ada pesanan.</p>
                        </div>
                    ) : (
                        recentOrders.map((order) => (
                            <div
                                key={order.id}
                                className="rounded-xl border border-border bg-card p-4"
                            >
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="font-mono text-sm font-medium">
                                                {order.order_number}
                                            </span>
                                            <span
                                                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                                    order.status === 'pending'
                                                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                        : order.status ===
                                                            'completed'
                                                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                }`}
                                            >
                                                {order.status === 'pending'
                                                    ? 'Menunggu'
                                                    : order.status ===
                                                        'completed'
                                                      ? 'Selesai'
                                                      : 'Dibatalkan'}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {order.user.name} (
                                            {order.user.email})
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {order.items
                                                .map(
                                                    (i) =>
                                                        `${i.ticket.name}${i.variant_name ? ` (${i.variant_name})` : ''} x${i.quantity}`,
                                                )
                                                .join(', ')}
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground">
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
                                    </div>

                                    <div className="text-right">
                                        <p className="text-lg font-bold text-primary">
                                            {formatRupiah(order.total)}
                                        </p>

                                        <a
                                            href={`/pesanan/${order.id}/invoice`}
                                            className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                                        >
                                            <Download className="h-3 w-3" />
                                            Unduh Invoice
                                        </a>

                                        {order.transaction &&
                                            order.transaction.status ===
                                                'pending' && (
                                                <div className="mt-3 space-y-2">
                                                    <div className="text-left text-xs text-muted-foreground">
                                                        <p>
                                                            Bank:{' '}
                                                            {
                                                                order
                                                                    .transaction
                                                                    .bank_name
                                                            }
                                                        </p>
                                                        <p>
                                                            A/N:{' '}
                                                            {
                                                                order
                                                                    .transaction
                                                                    .account_name
                                                            }
                                                        </p>
                                                        <p>
                                                            No:{' '}
                                                            {
                                                                order
                                                                    .transaction
                                                                    .account_number
                                                            }
                                                        </p>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Catatan (opsional)"
                                                        className="w-full rounded-lg border border-border bg-background px-2 py-1 text-xs"
                                                        value={
                                                            notes[
                                                                order
                                                                    .transaction
                                                                    .id
                                                            ] || ''
                                                        }
                                                        onChange={(e) =>
                                                            setNotes({
                                                                ...notes,
                                                                [order
                                                                    .transaction!
                                                                    .id]:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                    />
                                                    <div className="flex gap-2">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="text-green-600 hover:bg-green-50 hover:text-green-700"
                                                            disabled={
                                                                processingId ===
                                                                order
                                                                    .transaction
                                                                    .id
                                                            }
                                                            onClick={() =>
                                                                updateTransaction(
                                                                    order
                                                                        .transaction!
                                                                        .id,
                                                                    'verified',
                                                                )
                                                            }
                                                        >
                                                            <CheckCircle className="mr-1 h-3 w-3" />
                                                            Verifikasi
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="text-red-600 hover:bg-red-50 hover:text-red-700"
                                                            disabled={
                                                                processingId ===
                                                                order
                                                                    .transaction
                                                                    .id
                                                            }
                                                            onClick={() =>
                                                                updateTransaction(
                                                                    order
                                                                        .transaction!
                                                                        .id,
                                                                    'rejected',
                                                                )
                                                            }
                                                        >
                                                            <XCircle className="mr-1 h-3 w-3" />
                                                            Tolak
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}

                                        {order.transaction &&
                                            order.transaction.status !==
                                                'pending' && (
                                                <span
                                                    className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                                                        order.transaction
                                                            .status ===
                                                        'verified'
                                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                    }`}
                                                >
                                                    {order.transaction
                                                        .status === 'verified'
                                                        ? 'Terverifikasi'
                                                        : 'Ditolak'}
                                                </span>
                                            )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
