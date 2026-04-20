import { Head, router, usePage } from '@inertiajs/react';
import { MailCheck, Shield, ShieldCheck, User } from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

type UserItem = {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'staff' | 'user';
    email_verified_at: string | null;
    created_at: string;
};

type Props = {
    users: UserItem[];
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Kelola Pengguna', href: '/admin/users' },
];

const roleConfig: Record<
    string,
    { label: string; icon: typeof User; className: string }
> = {
    admin: {
        label: 'Admin',
        icon: ShieldCheck,
        className: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    },
    staff: {
        label: 'Staff',
        icon: Shield,
        className:
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    },
    user: {
        label: 'User',
        icon: User,
        className:
            'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    },
};

export default function AdminUsers({ users }: Props) {
    const { auth, flash } = usePage().props;

    function changeRole(userId: number, role: string) {
        router.patch(
            `/admin/users/${userId}`,
            { role },
            { preserveScroll: true },
        );
    }

    function verifyEmail(userId: number, name: string) {
        if (!confirm(`Verifikasi email ${name} secara manual?`)) return;
        router.post(
            `/admin/users/${userId}/verify`,
            {},
            { preserveScroll: true },
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Pengguna" />
            <div className="mx-auto max-w-5xl p-4 sm:p-6">
                <h1 className="mb-2 text-2xl font-bold">Kelola Pengguna</h1>
                <p className="mb-6 text-muted-foreground">
                    Atur role dan hak akses pengguna sistem.
                </p>

                {(flash as Record<string, string>)?.success && (
                    <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">
                        {(flash as Record<string, string>).success}
                    </div>
                )}

                <div className="overflow-hidden rounded-xl border border-border">
                    <table className="w-full text-sm">
                        <thead className="border-b border-border bg-muted">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium">
                                    Pengguna
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Role
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-left font-medium">
                                    Terdaftar
                                </th>
                                <th className="px-4 py-3 text-right font-medium">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {users.map((user) => {
                                const config = roleConfig[user.role];
                                const isCurrentUser =
                                    user.id === (auth.user as UserItem).id;

                                return (
                                    <tr key={user.id} className="bg-card">
                                        <td className="px-4 py-3">
                                            <div>
                                                <p className="font-medium">
                                                    {user.name}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${config.className}`}
                                            >
                                                <config.icon className="h-3 w-3" />
                                                {config.label}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            {user.email_verified_at ? (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                                                    <MailCheck className="h-3 w-3" />
                                                    Terverifikasi
                                                </span>
                                            ) : (
                                                <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                                                    Belum
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            {new Date(
                                                user.created_at,
                                            ).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-2">
                                                {!user.email_verified_at && (
                                                    <button
                                                        onClick={() =>
                                                            verifyEmail(
                                                                user.id,
                                                                user.name,
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-xs font-medium hover:bg-muted"
                                                    >
                                                        <MailCheck className="h-3.5 w-3.5" />
                                                        Verifikasi
                                                    </button>
                                                )}
                                                {isCurrentUser ? (
                                                    <span className="text-xs text-muted-foreground">
                                                        (Anda)
                                                    </span>
                                                ) : (
                                                    <select
                                                        className="rounded-lg border border-border bg-background px-2 py-1 text-xs"
                                                        value={user.role}
                                                        onChange={(e) =>
                                                            changeRole(
                                                                user.id,
                                                                e.target.value,
                                                            )
                                                        }
                                                    >
                                                        <option value="admin">
                                                            Admin
                                                        </option>
                                                        <option value="staff">
                                                            Staff
                                                        </option>
                                                        <option value="user">
                                                            User
                                                        </option>
                                                    </select>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
