import { Link, router, usePage } from '@inertiajs/react';
import {
    Cherry,
    ChevronDown,
    Drama,
    Droplets,
    LayoutDashboard,
    LogOut,
    Menu,
    Mountain,
    Music,
    Receipt,
    Waves,
    X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import LanguageSwitcher from '@/components/language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { logout } from '@/routes';

interface NavLink {
    href: string;
    label: string;
}

interface WisataNavbarProps {
    navLinks?: NavLink[];
}

export default function WisataNavbar({ navLinks }: WisataNavbarProps) {
    const { t } = useLanguage();
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [wisataOpen, setWisataOpen] = useState(false);
    const [atraksiOpen, setAtraksiOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const wisataRef = useRef<HTMLDivElement>(null);
    const atraksiRef = useRef<HTMLDivElement>(null);
    const userRef = useRef<HTMLDivElement>(null);

    const wisataDestinations = [
        {
            href: '/wisata/puncak-manud',
            label: 'Puncak Manud',
            description: t.navDropdown.puncakManud,
            icon: Mountain,
        },
        {
            href: '/wisata/kebun-stroberi',
            label: 'Kebun Stroberi',
            description: t.navDropdown.kebunStroberi,
            icon: Cherry,
        },
        {
            href: '/wisata/air-terjun-cahaya',
            label: 'Air Terjun Manud Jaya',
            description: t.navDropdown.airTerjun,
            icon: Droplets,
        },
    ];

    const atraksiItems = [
        {
            href: '/atraksi/konser-kecapi-suling',
            label: 'Konser Kecapi Suling',
            description: t.atraksiDropdown.konserKecapiSuling,
            icon: Music,
        },
        {
            href: '/atraksi/drama-sangkuriang',
            label: 'Drama Sangkuriang',
            description: t.atraksiDropdown.dramaSangkuriang,
            icon: Drama,
        },
        {
            href: '/atraksi/petik-strawberry',
            label: 'Petik Strawberry',
            description: t.atraksiDropdown.petikStrawberry,
            icon: Cherry,
        },
        {
            href: '/atraksi/rafting-cimanud',
            label: 'Rafting Sungai Cimanud',
            description: t.atraksiDropdown.raftingCimanud,
            icon: Waves,
        },
    ];

    const defaultLinks: NavLink[] = [
        { href: '/akomodasi-transportasi', label: t.nav.akomodasiTransportasi },
        { href: '/pemandu-wisata', label: t.nav.pemanduWisata },
        { href: '/faq', label: 'FAQ' },
        { href: '/kontak', label: t.nav.kontakKami },
    ];

    const links = navLinks ?? defaultLinks;

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                wisataRef.current &&
                !wisataRef.current.contains(e.target as Node)
            ) {
                setWisataOpen(false);
            }
            if (
                atraksiRef.current &&
                !atraksiRef.current.contains(e.target as Node)
            ) {
                setAtraksiOpen(false);
            }
            if (
                userRef.current &&
                !userRef.current.contains(e.target as Node)
            ) {
                setUserOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold tracking-tight"
                >
                    <Mountain className="h-6 w-6 text-primary" />
                    <span>Desa Manud Jaya</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 md:flex">
                    {/* Wisata dropdown */}
                    <div ref={wisataRef} className="relative">
                        <button
                            type="button"
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            onClick={() => setWisataOpen(!wisataOpen)}
                        >
                            {t.nav.wisata}
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${wisataOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {wisataOpen && (
                            <div className="absolute top-full left-1/2 mt-2 w-64 -translate-x-1/2 rounded-xl border border-border bg-background p-2 shadow-lg">
                                {wisataDestinations.map((dest) => (
                                    <Link
                                        key={dest.href}
                                        href={dest.href}
                                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                                        onClick={() => setWisataOpen(false)}
                                    >
                                        <dest.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <div>
                                            <p className="text-sm font-medium">
                                                {dest.label}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {dest.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Atraksi & Kegiatan dropdown */}
                    <div ref={atraksiRef} className="relative">
                        <button
                            type="button"
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            onClick={() => setAtraksiOpen(!atraksiOpen)}
                        >
                            {t.nav.atraksiKegiatan}
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${atraksiOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {atraksiOpen && (
                            <div className="absolute top-full left-1/2 mt-2 w-64 -translate-x-1/2 rounded-xl border border-border bg-background p-2 shadow-lg">
                                {atraksiItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                                        onClick={() => setAtraksiOpen(false)}
                                    >
                                        <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <div>
                                            <p className="text-sm font-medium">
                                                {item.label}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Other links */}
                    {links.map((link) =>
                        link.href.startsWith('#') ? (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ),
                    )}

                    <LanguageSwitcher />

                    {auth.user ? (
                        <div ref={userRef} className="relative">
                            <button
                                type="button"
                                className="flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                                onClick={() => setUserOpen(!userOpen)}
                            >
                                {t.nav.greeting} {auth.user.name}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${userOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {userOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-border bg-background p-2 shadow-lg">
                                    {auth.user.role === 'admin' ? (
                                        <Link
                                            href="/dashboard"
                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                                            onClick={() => setUserOpen(false)}
                                        >
                                            <LayoutDashboard className="h-4 w-4" />
                                            {t.nav.adminDashboard}
                                        </Link>
                                    ) : auth.user.role === 'staff' ? (
                                        <Link
                                            href="/staff/dashboard"
                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                                            onClick={() => setUserOpen(false)}
                                        >
                                            <LayoutDashboard className="h-4 w-4" />
                                            {t.nav.staffDashboard}
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/pesanan"
                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                                            onClick={() => setUserOpen(false)}
                                        >
                                            <Receipt className="h-4 w-4" />
                                            {t.nav.myOrders}
                                        </Link>
                                    )}
                                    <Link
                                        href={logout()}
                                        as="button"
                                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive transition-colors hover:bg-accent"
                                        onClick={() => {
                                            setUserOpen(false);
                                            router.flushAll();
                                        }}
                                    >
                                        <LogOut className="h-4 w-4" />
                                        {t.nav.logout}
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {t.nav.login}
                            </Link>
                            <Link
                                href="/register"
                                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                {t.nav.register}
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>

            {/* Mobile nav */}
            {mobileMenuOpen && (
                <div className="border-t border-border px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {/* Wisata collapsible */}
                        <div>
                            <button
                                type="button"
                                className="flex w-full items-center justify-between text-sm font-medium text-muted-foreground"
                                onClick={() => setWisataOpen(!wisataOpen)}
                            >
                                {t.nav.wisata}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${wisataOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {wisataOpen && (
                                <div className="mt-2 flex flex-col gap-1 pl-4">
                                    {wisataDestinations.map((dest) => (
                                        <Link
                                            key={dest.href}
                                            href={dest.href}
                                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent"
                                            onClick={() => {
                                                setWisataOpen(false);
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            <dest.icon className="h-4 w-4 text-primary" />
                                            {dest.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Atraksi & Kegiatan collapsible */}
                        <div>
                            <button
                                type="button"
                                className="flex w-full items-center justify-between text-sm font-medium text-muted-foreground"
                                onClick={() => setAtraksiOpen(!atraksiOpen)}
                            >
                                {t.nav.atraksiKegiatan}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${atraksiOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {atraksiOpen && (
                                <div className="mt-2 flex flex-col gap-1 pl-4">
                                    {atraksiItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent"
                                            onClick={() => {
                                                setAtraksiOpen(false);
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            <item.icon className="h-4 w-4 text-primary" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Other links */}
                        {links.map((link) =>
                            link.href.startsWith('#') ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}

                        <LanguageSwitcher />

                        <div className="flex flex-col gap-3 border-t border-border pt-4">
                            {auth.user ? (
                                <>
                                    <span className="text-sm font-medium">
                                        {t.nav.greeting} {auth.user.name}
                                    </span>
                                    {auth.user.role === 'admin' ? (
                                        <Link
                                            href="/dashboard"
                                            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <LayoutDashboard className="h-4 w-4" />
                                            {t.nav.adminDashboard}
                                        </Link>
                                    ) : auth.user.role === 'staff' ? (
                                        <Link
                                            href="/staff/dashboard"
                                            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <LayoutDashboard className="h-4 w-4" />
                                            {t.nav.staffDashboard}
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/pesanan"
                                            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <Receipt className="h-4 w-4" />
                                            {t.nav.myOrders}
                                        </Link>
                                    )}
                                    <Link
                                        href={logout()}
                                        as="button"
                                        className="flex items-center gap-2 text-sm font-medium text-destructive transition-colors hover:text-destructive/80"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            router.flushAll();
                                        }}
                                    >
                                        <LogOut className="h-4 w-4" />
                                        {t.nav.logout}
                                    </Link>
                                </>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Link
                                        href="/login"
                                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {t.nav.login}
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                                    >
                                        {t.nav.register}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
