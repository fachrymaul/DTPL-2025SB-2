import { Link, usePage } from '@inertiajs/react';
import {
    BookOpen,
    CreditCard,
    Folder,
    Mail,
    Package,
    ShoppingCart,
    Users,
} from 'lucide-react';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import type { User } from '@/types/auth';
import AppLogo from './app-logo';

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const { auth } = usePage().props;
    const user = auth.user as User;

    const mainNavItems: NavItem[] = [
        {
            title: 'Keranjang',
            href: '/keranjang',
            icon: ShoppingCart,
        },
        {
            title: 'Pesanan Saya',
            href: '/pesanan',
            icon: Package,
        },
    ];

    if (user?.role === 'admin' || user?.role === 'staff') {
        mainNavItems.push({
            title: 'Staff Dashboard',
            href: '/staff/dashboard',
            icon: CreditCard,
        });
    }

    if (user?.role === 'admin') {
        mainNavItems.push({
            title: 'Kelola Pengguna',
            href: '/admin/users',
            icon: Users,
        });
        mainNavItems.push({
            title: 'Broadcast Email',
            href: '/admin/broadcast',
            icon: Mail,
        });
    }

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
