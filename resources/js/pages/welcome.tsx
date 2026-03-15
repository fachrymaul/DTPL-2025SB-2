import { Head, Link, usePage } from '@inertiajs/react';
import { Bus, Cherry, Droplets, Mountain } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';
import { dashboard, register } from '@/routes';

const destinations = [
    {
        name: 'Puncak Manud',
        description:
            'Panoramic mountain viewpoint offering breathtaking sunrise vistas over the village and surrounding valleys.',
        image: '/images/landing_wisata_puncak.png',
        icon: Mountain,
        href: '/wisata/puncak-manud',
    },
    {
        name: 'Kebun Stroberi Manud Jaya',
        description:
            'Lush strawberry fields where visitors can pick their own fresh berries amidst the cool highland air.',
        image: '/images/landing_wisata_stroberi.png',
        icon: Cherry,
        href: '/wisata/kebun-stroberi',
    },
    {
        name: 'Air Terjun Manud Jaya',
        description:
            'A stunning 40-meter waterfall hidden in the tropical forest, perfect for swimming and nature photography.',
        image: '/images/landing_wisata_airterjun.png',
        icon: Droplets,
        href: '/wisata/air-terjun-cahaya',
    },
];

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Desa Manud Jaya — Wisata Alam">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar canRegister={canRegister} />

                <main>
                    {/* Hero */}
                    <section className="relative overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="/images/landing_hero.png"
                                alt="Desa Manud Jaya"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                    Selamat Datang di{' '}
                                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                        Desa Manud Jaya
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-white/80">
                                    Nikmati keindahan pegunungan, kesegaran
                                    kebun stroberi, dan pesona air terjun
                                    tersembunyi di desa wisata alam yang masih
                                    asri di jantung Indonesia.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-4">
                                    <a
                                        href="#destinations"
                                        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                                    >
                                        Jelajahi Wisata
                                    </a>
                                    <Link
                                        href="/akomodasi-transportasi"
                                        className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                                    >
                                        Akomodasi & Transportasi
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Destinasi Wisata */}
                    <section
                        id="destinations"
                        className="mx-auto max-w-7xl px-6 py-20 lg:py-28"
                    >
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Destinasi Wisata
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Tempat-tempat pilihan yang menawarkan pengalaman
                                luar biasa bagi setiap pengunjung.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {destinations.map((dest) => (
                                <Link key={dest.name} href={dest.href}>
                                    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                                        <div className="relative flex h-48 items-center justify-center">
                                            <img
                                                src={dest.image}
                                                alt={dest.name}
                                                className="absolute inset-0 h-full w-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/30" />
                                            <dest.icon className="relative h-16 w-16 text-white/80 transition-transform group-hover:scale-110" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-card-foreground">
                                                    {dest.name}
                                                </h3>
                                            </div>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                {dest.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Akomodasi & Transportasi Thumbnail */}
                    <section className="border-y border-border bg-muted/50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                            <div className="grid items-center gap-12 lg:grid-cols-2">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Akomodasi & Transportasi
                                    </h2>
                                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                        Temukan berbagai pilihan penginapan
                                        nyaman mulai dari homestay warga hingga
                                        villa keluarga. Desa Manud Jaya mudah
                                        dijangkau melalui bus umum, kereta api,
                                        maupun kendaraan pribadi dari kota
                                        terdekat.
                                    </p>
                                    <Link
                                        href="/akomodasi-transportasi"
                                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                                    >
                                        <Bus className="h-4 w-4" />
                                        Selengkapnya
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/landing_akomodasi.png"
                                        alt="Akomodasi"
                                        className="aspect-square rounded-xl object-cover"
                                    />
                                    <img
                                        src="/images/landing_transportasi.png"
                                        alt="Transportasi"
                                        className="aspect-square rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                        <div className="relative overflow-hidden rounded-2xl px-6 py-16 text-center sm:px-16">
                            <img
                                src="/images/landing_bottom.png"
                                alt="Desa Manud Jaya"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50" />
                            <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Siap Menjelajahi Desa Manud Jaya?
                            </h2>
                            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
                                Bergabunglah dengan ribuan wisatawan yang telah
                                menemukan keindahan alam tersembunyi di desa
                                kami. Petualangan Anda dimulai di sini.
                            </p>
                            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-colors hover:bg-white/90"
                                    >
                                        Ke Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        {canRegister && (
                                            <Link
                                                href={register()}
                                                className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-colors hover:bg-white/90"
                                            >
                                                Daftar Sekarang
                                            </Link>
                                        )}
                                        <a
                                            href="#destinations"
                                            className="rounded-lg border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                        >
                                            Lihat Wisata
                                        </a>
                                    </>
                                )}
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
                            <div className="flex flex-wrap gap-6">
                                <a
                                    href="#destinations"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Wisata
                                </a>
                                <Link
                                    href="/akomodasi-transportasi"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Akomodasi & Transportasi
                                </Link>
                                <Link
                                    href="/kontak"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Kontak Kami
                                </Link>
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
