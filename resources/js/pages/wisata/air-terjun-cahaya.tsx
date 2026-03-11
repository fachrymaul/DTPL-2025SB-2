import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Backpack,
    Droplets,
    Ruler,
    Signpost,
    Waves,
} from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

export default function AirTerjunCahaya({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head title="Air Terjun Cahaya — Desa Manud Jaya">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10" />
                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500">
                                <Droplets className="h-10 w-10 text-white" />
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Air Terjun Cahaya
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                A stunning 40-meter waterfall hidden in the
                                tropical forest, perfect for swimming and nature
                                photography.
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
                                Tentang Air Terjun Cahaya
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Air Terjun Cahaya adalah permata tersembunyi di
                                jantung hutan tropis Desa Manud Jaya. Dengan
                                ketinggian sekitar 40 meter, air terjun ini
                                menciptakan kolam alami yang jernih di dasarnya,
                                sempurna untuk berenang dan menyegarkan diri
                                setelah perjalanan menyusuri hutan.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Nama &quot;Cahaya&quot; berasal dari fenomena
                                unik di mana sinar matahari menembus celah
                                kanopi hutan dan memantulkan pelangi kecil di
                                percikan air terjun, terutama pada pagi hari
                                antara pukul 09:00 — 11:00. Jalur menuju air
                                terjun sepanjang 1,5 km melewati hutan yang
                                rimbun dengan suara alam yang menenangkan.
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">
                                Highlights
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'Kolam alami yang jernih untuk berenang',
                                    'Fenomena pelangi di percikan air terjun pada pagi hari',
                                    'Jalur trekking melalui hutan tropis yang rimbun',
                                    'Spot foto dengan latar belakang air terjun yang megah',
                                    'Suasana tenang jauh dari keramaian kota',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <Droplets className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                                        <span className="text-muted-foreground">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-10 text-xl font-semibold">
                                Yang Perlu Dibawa
                            </h3>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                {[
                                    'Sepatu trekking anti-slip',
                                    'Pakaian ganti & handuk',
                                    'Botol air minum',
                                    'Sunscreen & topi',
                                    'Kamera waterproof',
                                    'Kantong plastik untuk sampah',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                                    >
                                        <Backpack className="h-5 w-5 shrink-0 text-blue-500" />
                                        <span className="text-sm text-muted-foreground">
                                            {item}
                                        </span>
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
                                        className="flex aspect-[4/3] items-center justify-center rounded-xl border border-border bg-gradient-to-br from-blue-400/20 to-indigo-500/20"
                                    >
                                        <Droplets className="h-8 w-8 text-muted-foreground/40" />
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
                                        <Ruler className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Ketinggian Air Terjun
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                ~40 meter
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Signpost className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Jarak Jalur
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                1,5 km dari titik parkir (30-45
                                                menit)
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Waves className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Berenang
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                Ya — kolam alami dengan
                                                kedalaman 1,5-3 meter
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
