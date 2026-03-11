import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Camera,
    Cherry,
    Clock,
    HandCoins,
    Leaf,
} from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

export default function KebunStroberi({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head title="Kebun Stroberi Manud Jaya — Desa Manud Jaya">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar
                    canRegister={canRegister}
                    navLinks={[{ href: '/', label: 'Beranda' }]}
                />

                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-rose-500/20 dark:from-pink-500/10 dark:to-rose-500/10" />
                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500">
                                <Cherry className="h-10 w-10 text-white" />
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Kebun Stroberi Manud Jaya
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Lush strawberry fields where visitors can pick
                                their own fresh berries amidst the cool highland
                                air.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Main content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold">
                                Tentang Kebun Stroberi
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Kebun Stroberi Manud Jaya terletak di dataran
                                tinggi yang sejuk, menyediakan pengalaman unik
                                bagi pengunjung untuk memetik stroberi segar
                                langsung dari kebunnya. Kebun ini dikelola
                                secara organik oleh petani lokal, menghasilkan
                                buah stroberi yang manis dan berkualitas tinggi.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Selain memetik stroberi, pengunjung juga dapat
                                menikmati berbagai olahan stroberi segar seperti
                                jus, selai, dan kue stroberi khas desa. Area
                                kebun yang luas juga menjadi spot foto favorit
                                dengan latar belakang pegunungan yang menawan.
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">
                                Aktivitas
                            </h3>
                            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                {[
                                    {
                                        icon: Cherry,
                                        title: 'Petik Stroberi',
                                        desc: 'Petik langsung stroberi segar dari kebun dan bawa pulang sebagai oleh-oleh.',
                                    },
                                    {
                                        icon: Leaf,
                                        title: 'Tasting',
                                        desc: 'Cicipi berbagai olahan stroberi organik khas Desa Manud Jaya.',
                                    },
                                    {
                                        icon: Camera,
                                        title: 'Spot Foto',
                                        desc: 'Abadikan momen di tengah kebun stroberi dengan latar pegunungan.',
                                    },
                                ].map((activity) => (
                                    <div
                                        key={activity.title}
                                        className="rounded-xl border border-border bg-card p-5"
                                    >
                                        <activity.icon className="h-8 w-8 text-pink-500" />
                                        <h4 className="mt-3 font-semibold">
                                            {activity.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {activity.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Gallery placeholder */}
                            <h3 className="mt-10 text-xl font-semibold">
                                Galeri
                            </h3>
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex aspect-[4/3] items-center justify-center rounded-xl border border-border bg-gradient-to-br from-pink-400/20 to-rose-500/20"
                                    >
                                        <Cherry className="h-8 w-8 text-muted-foreground/40" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info sidebar */}
                        <div>
                            <div className="rounded-xl border border-border bg-card p-6">
                                <h3 className="text-lg font-semibold">
                                    Informasi
                                </h3>
                                <dl className="mt-4 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Cherry className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Musim Panen
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                Sepanjang tahun (puncak: Juni —
                                                Agustus)
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <HandCoins className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Harga Tiket
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                Rp 25.000 / orang (termasuk 100g
                                                stroberi)
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Jam Buka
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                08:00 — 17:00 WIB (setiap hari)
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back link */}
                <section className="mx-auto max-w-7xl px-6 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Beranda
                    </Link>
                </section>
            </div>
        </>
    );
}
