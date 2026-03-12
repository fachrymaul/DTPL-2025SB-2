import { Head } from '@inertiajs/react';
import { Mail, MapPin, Mountain, Phone } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

export default function Kontak({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head title="Kontak Kami — Desa Manud Jaya">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar canRegister={canRegister} />

                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 dark:from-emerald-500/10 dark:to-blue-500/10" />
                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Kontak{' '}
                                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                                    Kami
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Hubungi kami untuk informasi lebih lanjut
                                tentang wisata, penginapan, atau kunjungan ke
                                Desa Manud Jaya.
                            </p>
                        </div>
                    </div>
                </section>

                <main>
                    <section className="mx-auto max-w-7xl px-6 py-16">
                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Informasi Kontak
                                </h2>
                                <p className="mt-4 text-muted-foreground">
                                    Jangan ragu untuk menghubungi kami melalui
                                    salah satu cara berikut. Tim kami siap
                                    membantu Anda merencanakan kunjungan yang
                                    sempurna.
                                </p>

                                <div className="mt-8 space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                Email
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                humasManudJaya@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                Telepon
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                +62 812 – 1122 3344 (Bapak Efendi)
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                +62 812 – 1011 1213 (Bapak Efendi)
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Lokasi Kami
                                </h2>
                                <p className="mt-4 text-muted-foreground">
                                    Peta lokasi Desa Manud Jaya dan rute menuju
                                    desa wisata.
                                </p>
                                <div className="mt-8 flex aspect-[4/3] items-center justify-center rounded-xl border border-border bg-muted">
                                    <div className="text-center">
                                        <MapPin className="mx-auto h-12 w-12 text-muted-foreground/40" />
                                        <p className="mt-4 text-sm font-medium text-muted-foreground">
                                            Peta Google Maps
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground/60">
                                            Embed peta akan ditampilkan di sini
                                        </p>
                                    </div>
                                </div>

                                {/* Directions summary */}
                                <div className="mt-6 rounded-xl border border-border bg-card p-6">
                                    <h3 className="font-semibold">
                                        Petunjuk Arah
                                    </h3>
                                    <ul className="mt-3 space-y-2">
                                        {[
                                            'Dari pusat kota, ambil Jalan Raya Pegunungan ke arah selatan.',
                                            'Ikuti jalan utama selama ± 50 km melewati Kecamatan Lembah.',
                                            'Belok kanan di pertigaan Pos Jaga Gunung, ikuti papan petunjuk "Desa Manud Jaya".',
                                            'Jalan terus ± 10 km hingga tiba di gerbang desa.',
                                        ].map((step, i) => (
                                            <li
                                                key={step}
                                                className="flex items-start gap-3 text-sm text-muted-foreground"
                                            >
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                                                    {i + 1}
                                                </span>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-border">
                    <div className="mx-auto max-w-7xl px-6 py-12">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <Mountain className="h-5 w-5 text-primary" />
                                <span>Desa Manud Jaya</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                &copy; 2026 Desa Manud Jaya. Hak cipta
                                dilindungi.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
