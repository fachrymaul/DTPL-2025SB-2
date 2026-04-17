import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowLeft,
    Cake,
    CreditCard,
    Mail,
    Package,
    ShieldCheck,
    ShoppingCart,
    User as UserIcon,
    Users,
} from 'lucide-react';
import type { ComponentType } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import type { User } from '@/types/auth';

type MenuCard = {
    title: string;
    description: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

function formatDate(value: string | null) {
    if (!value) return '—';
    return new Date(value).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

function formatGender(value: User['gender']) {
    if (value === 'male') return 'Laki-laki';
    if (value === 'female') return 'Perempuan';
    return '—';
}

function roleLabel(role: User['role']) {
    if (role === 'admin') return 'Admin';
    if (role === 'staff') return 'Staff';
    return 'Pengguna';
}

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth.user as User;

    const menu: MenuCard[] = [
        {
            title: 'Keranjang',
            description: 'Lihat dan kelola tiket di keranjang Anda.',
            href: '/keranjang',
            icon: ShoppingCart,
        },
        {
            title: 'Pesanan Saya',
            description: 'Pantau status pembayaran dan riwayat pesanan.',
            href: '/pesanan',
            icon: Package,
        },
    ];

    if (user?.role === 'admin' || user?.role === 'staff') {
        menu.push({
            title: 'Staff Dashboard',
            description: 'Verifikasi pembayaran dan kelola transaksi.',
            href: '/staff/dashboard',
            icon: CreditCard,
        });
    }

    if (user?.role === 'admin') {
        menu.push({
            title: 'Kelola Pengguna',
            description: 'Atur peran dan data pengguna sistem.',
            href: '/admin/users',
            icon: Users,
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                <div>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Beranda
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Profil Saya</CardTitle>
                        <CardDescription>
                            Informasi akun yang terhubung dengan sesi ini.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                            <UserIcon className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Nama
                                </p>
                                <p className="text-sm font-medium">
                                    {user.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Mail className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Email
                                </p>
                                <p className="text-sm font-medium">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Peran
                                </p>
                                <p className="text-sm font-medium">
                                    {roleLabel(user.role)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Cake className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Tanggal Lahir
                                </p>
                                <p className="text-sm font-medium">
                                    {formatDate(user.date_of_birth)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <UserIcon className="mt-0.5 h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Jenis Kelamin
                                </p>
                                <p className="text-sm font-medium">
                                    {formatGender(user.gender)}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div>
                    <h2 className="mb-3 text-lg font-semibold">
                        Menu yang Dapat Diakses
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {menu.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group"
                            >
                                <Card className="h-full transition-colors group-hover:border-primary/50 group-hover:bg-accent/40">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <CardTitle className="text-base">
                                                {item.title}
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="mt-2">
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
