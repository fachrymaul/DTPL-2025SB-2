import { Head, router, usePage } from '@inertiajs/react';
import { Mail, Send } from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

type Props = {
    totalRecipients: number;
    segmentBreakdown: Record<string, number>;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Broadcast Email', href: '/admin/broadcast' },
];

const segmentLabels: Record<string, { title: string; target: string }> = {
    A: { title: 'Adventure Seeker', target: '/wisata/puncak-manud' },
    B: { title: 'Eco-Hobbyist', target: '/wisata/kebun-stroberi' },
    C: { title: 'Weekend Escaper', target: '/akomodasi-transportasi' },
    D: {
        title: 'Social Shopper & Planner',
        target: '/atraksi/petik-strawberry',
    },
    E: { title: 'Family Provider', target: '/wisata/air-terjun-cahaya' },
    F: {
        title: 'Wellness & Craft Enthusiast',
        target: '/atraksi/petik-strawberry',
    },
    G: { title: 'Serenity Seeker', target: '/wisata/air-terjun-cahaya' },
    H: {
        title: 'Heritage & Nature Admirer',
        target: '/atraksi/drama-sangkuriang',
    },
};

export default function AdminBroadcast({
    totalRecipients,
    segmentBreakdown,
}: Props) {
    const { flash } = usePage().props;

    function broadcast() {
        if (
            !confirm(
                `Kirim email ke ${totalRecipients} pelanggan terverifikasi? Aksi ini tidak bisa dibatalkan.`,
            )
        )
            return;
        router.post('/admin/broadcast', {}, { preserveScroll: true });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Broadcast Email" />
            <div className="mx-auto max-w-4xl p-4 sm:p-6">
                <h1 className="text-2xl font-bold">
                    Broadcast Email ke Pelanggan
                </h1>
                <p className="mt-1 text-muted-foreground">
                    Kirim satu email yang otomatis memilih template & tujuan
                    halaman sesuai segmen tiap pelanggan.
                </p>

                {(flash as Record<string, string>)?.success && (
                    <div className="mt-6 rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">
                        {(flash as Record<string, string>).success}
                    </div>
                )}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border bg-card p-5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            Calon penerima
                        </div>
                        <p className="mt-2 text-3xl font-bold">
                            {totalRecipients.toLocaleString('id-ID')}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Pelanggan dengan email terverifikasi.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-xl border border-border bg-card p-5">
                        <button
                            onClick={broadcast}
                            disabled={totalRecipients === 0}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Send className="h-4 w-4" />
                            Kirim Broadcast Sekarang
                        </button>
                        <p className="mt-2 text-center text-xs text-muted-foreground">
                            Dikirim via queue worker, satu email per pelanggan.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-sm font-semibold">
                        Sebaran segmen & tujuan halaman
                    </h2>
                    <div className="mt-3 overflow-hidden rounded-xl border border-border">
                        <table className="w-full text-sm">
                            <thead className="border-b border-border bg-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Segmen
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Profil
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Diarahkan ke
                                    </th>
                                    <th className="px-4 py-3 text-right font-medium">
                                        Penerima
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {Object.keys(segmentLabels).map((key) => {
                                    const info = segmentLabels[key];
                                    const count = segmentBreakdown[key] ?? 0;
                                    return (
                                        <tr key={key} className="bg-card">
                                            <td className="px-4 py-3 font-mono font-semibold">
                                                {key}
                                            </td>
                                            <td className="px-4 py-3">
                                                {info.title}
                                            </td>
                                            <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                                                {info.target}
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                {count}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                        Pelanggan tanpa tanggal lahir atau gender dihitung
                        sebagai segmen H.
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
