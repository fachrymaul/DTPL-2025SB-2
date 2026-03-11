import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Clock, Mountain, Signpost, ThermometerSun, TrendingUp } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

export default function PuncakManud({ canRegister = true }: { canRegister?: boolean }) {
    return (
        <>
            <Head title="Puncak Manud — Desa Manud Jaya">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar canRegister={canRegister} navLinks={[{ href: '/', label: 'Beranda' }]} />

                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10" />
                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500">
                                <Mountain className="h-10 w-10 text-white" />
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Puncak Manud</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Panoramic mountain viewpoint offering breathtaking sunrise vistas over the village and surrounding valleys.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Main content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold">Tentang Puncak Manud</h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Puncak Manud adalah titik tertinggi di kawasan Desa Manud Jaya, menawarkan pemandangan 360 derajat yang
                                memukau dari puncak gunung. Dari sini, pengunjung dapat menyaksikan matahari terbit yang spektakuler
                                dengan latar belakang lembah hijau dan perbukitan yang membentang sejauh mata memandang.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Jalur pendakian menuju puncak melewati hutan tropis yang masih asri, dihiasi dengan berbagai jenis
                                flora dan fauna endemik. Perjalanan menuju puncak membutuhkan waktu sekitar 2-3 jam, menjadikannya
                                cocok untuk pendaki pemula maupun berpengalaman.
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">Highlights</h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'Pemandangan sunrise spektakuler di atas lautan awan',
                                    'Jalur pendakian melalui hutan tropis yang asri',
                                    'Spot foto panorama 360 derajat',
                                    'Camping ground di area puncak',
                                    'Flora dan fauna endemik sepanjang jalur pendakian',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Gallery placeholder */}
                            <h3 className="mt-10 text-xl font-semibold">Galeri</h3>
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 border border-border"
                                    >
                                        <Mountain className="h-8 w-8 text-muted-foreground/40" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info sidebar */}
                        <div>
                            <div className="rounded-xl border border-border bg-card p-6">
                                <h3 className="text-lg font-semibold">Informasi</h3>
                                <dl className="mt-4 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Mountain className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">Ketinggian</dt>
                                            <dd className="text-sm text-muted-foreground">2.150 mdpl</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">Waktu Terbaik</dt>
                                            <dd className="text-sm text-muted-foreground">April — September (musim kemarau)</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Signpost className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">Tingkat Kesulitan</dt>
                                            <dd className="text-sm text-muted-foreground">Sedang (cocok untuk pemula)</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ThermometerSun className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">Suhu</dt>
                                            <dd className="text-sm text-muted-foreground">12°C — 22°C</dd>
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
