import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Camera,
    Cherry,
    Clock,
    HandCoins,
    Info,
    Leaf,
    UtensilsCrossed,
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
                <section className="relative">
                    <img
                        src="/images/stroberi_hero.png"
                        alt="Kebun Stroberi Manud Jaya"
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Kebun Stroberi Manud Jaya
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
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
                                Kebun Strawberry Manud Jaya merupakan destinasi
                                wisata keluarga yang menawarkan pengalaman
                                memetik strawberry langsung dari kebunnya.
                                Terletak di kawasan pegunungan dengan udara yang
                                sejuk, kebun ini menjadi tempat yang
                                menyenangkan bagi pengunjung untuk menikmati
                                suasana alam sekaligus merasakan pengalaman
                                memetik buah segar secara langsung.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Destinasi ini juga dirancang sebagai wisata
                                ramah anak (kids-friendly). Anak-anak dapat
                                mengikuti aktivitas edukatif seperti memberi
                                makan kelinci dan domba yang berada di area
                                peternakan mini. Kegiatan ini wmemberikan
                                pengalaman belajar yang menyenangkan bagi
                                anak-anak mengenai hewan dan lingkungan.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Destinasi ini juga dirancang sebagai wisata
                                ramah anak (kids-friendly). Anak-anak dapat
                                mengikuti aktivitas edukatif seperti memberi
                                makan kelinci dan domba yang berada di area
                                peternakan mini. Kegiatan ini wmemberikan
                                pengalaman belajar yang menyenangkan bagi
                                anak-anak mengenai hewan dan lingkungan.
                            </p>
                            <h3 className="mt-10 text-xl font-semibold">
                                Aktivitas yang Bisa Dilakukan
                            </h3>
                            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                {[
                                    {
                                        icon: Cherry,
                                        title: 'Mmetik stroberi langsung dari kebun',
                                        desc: 'Petik langsung stroberi segar dari kebun dan bawa pulang sebagai oleh-oleh.',
                                    },
                                    {
                                        icon: Leaf,
                                        title: 'Memberi Makan Hewan',
                                        desc: 'Beri makan kelinci dan domba di peternakan mini yang ada di area wisata.',
                                    },
                                    {
                                        icon: Camera,
                                        title: 'Berfoto di area kebun strawberry',
                                        desc: 'Abadikan momen seru memetik stroberi dengan latar kebun yang indah.',
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

                            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                {[
                                    {
                                        icon: UtensilsCrossed,
                                        title: 'Menikmati olahan strawberry segar ',
                                        desc: 'Cicipi berbagai olahan stroberi organik khas Desa Manud Jaya.',
                                    },
                                    {
                                        icon: Info,
                                        title: 'Wisata edukasi pertanian untuk anak-anak ',
                                        desc: 'Anak-anak dapat belajar tentang pertanian dan cara menanam stroberi melalui aktivitas edukatif yang menyenangkan.',
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
                                    <img
                                        key={i}
                                        src={`/images/stroberi_galeri_${i + 1}.png`}
                                        alt={`Galeri Kebun Stroberi ${i + 1}`}
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
                                                <ul className="mt-1 text-xs text-muted-foreground">
                                                    <li>
                                                        {' '}
                                                        Tiket masuk kebun :
                                                        Rp15.000 / orang{' '}
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        Paket petik strawberry :
                                                        Rp50.000 / 500 gram{' '}
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        Pakan kelinci & domba :
                                                        Rp10.000 / paket{' '}
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        Parkir motor :
                                                        Rp5.000{' '}
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        Parkir mobil :
                                                        Rp10.000{' '}
                                                    </li>
                                                </ul>
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
