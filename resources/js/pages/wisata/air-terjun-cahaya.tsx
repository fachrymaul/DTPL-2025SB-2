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
            <Head title="Air Terjun Manud Jaya — Desa Manud Jaya">
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
                        src="/images/airterjun_hero.png"
                        alt="Air Terjun Manud Jaya"
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Air Terjun Manud Jaya
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
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
                                Tentang Air Terjun Manud Jaya
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Air Terjun Manud Jaya merupakan salah satu
                                keindahan alam yang menjadi daya tarik utama
                                desa ini. Terletak di kawasan hutan yang masih
                                alami, air terjun ini menawarkan suasana yang
                                sejuk, tenang, dan menyegarkan bagi para
                                pengunjung.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Untuk mencapai lokasi air terjun, pengunjung
                                perlu melakukan trekking ringan selama sekitar
                                15–20 menit dari area parkir. Sepanjang
                                perjalanan, wisatawan akan melewati jalur alami
                                dengan pemandangan pepohonan hijau dan suara
                                alam yang menenangkan.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Sesampainya di lokasi, pengunjung dapat
                                menikmati air terjun dengan air yang jernih
                                serta suasana alam yang masih sangat asri.
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">
                                Highlights
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'Trekking ringan menuju air terjun',
                                    'Menikmati panorama alam sekitar',
                                    'Bermain air di area air terjun',
                                    'Berfoto di spot alam yang indah',
                                    'Bersantai menikmati udara pegunungan',
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
                                    <img
                                        key={i}
                                        src={`/images/airterjun_galeri_${i + 1}.png`}
                                        alt={`Galeri Air Terjun ${i + 1}`}
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
                                    <div className="flex items-start gap-3">
                                        <Waves className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                Harga Tiket Masuk
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                <ul className="list-inside list-disc">
                                                    <li>
                                                        Tiket masuk : Rp10.000 /
                                                        orang
                                                    </li>
                                                    <li>
                                                        Tiket trekking area :
                                                        Rp5.000
                                                    </li>
                                                    <li>
                                                        Parkir motor : Rp5.000
                                                    </li>
                                                    <li>
                                                        Parkir mobil : Rp10.000
                                                    </li>
                                                    <li>
                                                        Sewa tracking pole : Rp
                                                        15.000 / hari
                                                    </li>
                                                    <li>
                                                        Guide : Rp 150.000 /
                                                        hari
                                                    </li>
                                                    <li>
                                                        Ban / Pelanpung : Rp
                                                        10.000
                                                    </li>
                                                </ul>
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
