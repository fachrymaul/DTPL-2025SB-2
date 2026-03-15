import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Clock,
    Mountain,
    Signpost,
    Info,
    Footprints,
    TrendingUp,
} from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

export default function PuncakManud({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head title="Puncak Manud — Desa Manud Jaya">
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
                <section className="relative">
                    <img
                        src="/images/puncak_hero.png"
                        alt="Puncak Manud"
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Puncak Manud
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                Panoramic mountain viewpoint offering
                                breathtaking sunrise vistas over the village and
                                surrounding valleys.
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
                                Tentang Puncak Manud
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Puncak Gunung Manud Jaya merupakan destinasi
                                wisata alam bagi para pecinta petualangan dan
                                pendaki. Gunung ini memiliki ketinggian sekitar
                                2.110 mdpl (meter di atas permukaan laut) dan
                                menawarkan panorama alam yang luar biasa dari
                                puncaknya.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Dari puncak gunung, pengunjung dapat menikmati
                                pemandangan hamparan pegunungan, kebun
                                pertanian, serta lanskap desa yang terlihat
                                sangat indah terutama saat matahari terbit
                                (sunrise) maupun matahari terbenam (sunset).
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Pendakian dapat dimulai dari basecamp yang
                                tersedia di desa. Untuk mempermudah akses,
                                tersedia ojek gunung yang dapat mengantar
                                pengunjung hingga Pos 1. Dari Pos 1 menuju
                                puncak, perjalanan trekking membutuhkan waktu
                                sekitar 4–5 jam dengan elevation gain sekitar
                                1.100 mdpl.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Pendaki dapat memilih untuk melakukan pendakian
                                tektok (naik dan turun dalam satu hari) atau
                                berkemah (camping) untuk menikmati suasana malam
                                di pegunungan.
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">
                                Aktivitas yang Bisa Dilakukan
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'Trekking menuju puncak gunung',
                                    'Menikmati panorama alam dari ketinggian 2.110 mdpl',
                                    'Menikmati sunrise dan sunset dari puncak',
                                    'Camping di area pendakian',
                                    'Pendakian tektok(naik turun dalam satu hari)',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                        <span className="text-muted-foreground">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Gallery placeholder */}
                            <h3 className="mt-10 text-xl font-semibold">
                                Galeri
                            </h3>
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <img
                                        key={i}
                                        src={`/images/puncak_galeri_${i + 1}.png`}
                                        alt={`Galeri Puncak Manud ${i + 1}`}
                                        className="aspect-[4/3] rounded-xl object-cover"
                                    />
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
                                        <Mountain className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Ketinggian
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                2.110 mdpl
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Durasi Pendakian Pos 1 ke Puncak
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                ± 4–5 jam
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Signpost className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Elevation Gain
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                ± 1.100 mdpl
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Footprints className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Akses ke Pos 1
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                Tersedia ojek gunung
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Info className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Persyaratan Tektok
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                Surat sehat
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
