import { Head, Link, usePage } from '@inertiajs/react';
import { Cherry, Droplets, MapPin, Mountain, Quote, Star, Tent, TreePalm } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';
import { dashboard, register } from '@/routes';

const destinations = [
    {
        name: 'Puncak Manud',
        description: 'Panoramic mountain viewpoint offering breathtaking sunrise vistas over the village and surrounding valleys.',
        rating: 4.9,
        gradient: 'from-emerald-400 to-cyan-500',
        icon: Mountain,
        href: '/wisata/puncak-manud',
    },
    {
        name: 'Kebun Stroberi Manud Jaya',
        description: 'Lush strawberry fields where visitors can pick their own fresh berries amidst the cool highland air.',
        rating: 4.8,
        gradient: 'from-pink-400 to-rose-500',
        icon: Cherry,
        href: '/wisata/kebun-stroberi',
    },
    {
        name: 'Air Terjun Cahaya',
        description: 'A stunning 40-meter waterfall hidden in the tropical forest, perfect for swimming and nature photography.',
        rating: 4.9,
        gradient: 'from-blue-400 to-indigo-500',
        icon: Droplets,
        href: '/wisata/air-terjun-cahaya',
    },
    {
        name: 'Bukit Embun',
        description: 'A misty hilltop trail surrounded by pine trees, ideal for morning hikes and camping under the stars.',
        rating: 4.7,
        gradient: 'from-teal-400 to-emerald-600',
        icon: Tent,
    },
    {
        name: 'Taman Bunga Desa',
        description: 'A colorful flower garden cultivated by local villagers, showcasing native highland blooms year-round.',
        rating: 4.6,
        gradient: 'from-orange-400 to-amber-500',
        icon: TreePalm,
    },
    {
        name: 'Sungai Jernih',
        description: 'Crystal-clear river flowing through the village, popular for tubing, fishing, and riverside picnics.',
        rating: 4.8,
        gradient: 'from-sky-400 to-blue-600',
        icon: Droplets,
    },
];

const testimonials = [
    {
        quote: 'Desa Manud Jaya adalah permata tersembunyi. Pemandangan gunungnya luar biasa dan kebun stroberinya membuat anak-anak kami sangat senang!',
        name: 'Rina Hartono',
        location: 'Jakarta, Indonesia',
    },
    {
        quote: 'Air Terjun Cahaya benar-benar memukau. Airnya sejuk dan bersih, dikelilingi hutan yang masih asri. Pasti akan kembali lagi.',
        name: 'Budi Prasetyo',
        location: 'Bandung, Indonesia',
    },
    {
        quote: 'Penduduk desanya sangat ramah dan pemandu lokalnya luar biasa. Sunrise dari Puncak Manud adalah pengalaman yang tak terlupakan.',
        name: 'Dewi Lestari',
        location: 'Surabaya, Indonesia',
    },
];

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Desa Manud Jaya — Wisata Alam">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar canRegister={canRegister} />

                <main>
                    {/* Hero */}
                    <section className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 dark:from-blue-500/5 dark:to-emerald-500/5" />
                        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                    Selamat Datang di{' '}
                                    <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                                        Desa Manud Jaya
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                    Nikmati keindahan pegunungan, kesegaran kebun stroberi, dan pesona air terjun tersembunyi
                                    di desa wisata alam yang masih asri di jantung Indonesia.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-4">
                                    <a
                                        href="#destinations"
                                        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                                    >
                                        Jelajahi Wisata
                                    </a>
                                    <a
                                        href="#testimonials"
                                        className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                                    >
                                        Baca Testimoni
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Destinasi Wisata */}
                    <section id="destinations" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Destinasi Wisata</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Tempat-tempat pilihan yang menawarkan pengalaman luar biasa bagi setiap pengunjung.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {destinations.map((dest) => {
                                const card = (
                                    <div
                                        className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
                                    >
                                        <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${dest.gradient}`}>
                                            <dest.icon className="h-16 w-16 text-white/80 transition-transform group-hover:scale-110" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-card-foreground">{dest.name}</h3>
                                                <div className="flex items-center gap-1">
                                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                                    <span className="text-sm font-medium">{dest.rating}</span>
                                                </div>
                                            </div>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dest.description}</p>
                                        </div>
                                    </div>
                                );

                                return dest.href ? (
                                    <Link key={dest.name} href={dest.href}>
                                        {card}
                                    </Link>
                                ) : (
                                    <div key={dest.name}>{card}</div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Testimoni */}
                    <section id="testimonials" className="border-y border-border bg-muted/50">
                        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kata Pengunjung</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Cerita nyata dari para wisatawan yang telah menjelajahi Desa Manud Jaya.
                                </p>
                            </div>
                            <div className="mt-12 grid gap-8 md:grid-cols-3">
                                {testimonials.map((t) => (
                                    <div
                                        key={t.name}
                                        className="rounded-xl border border-border bg-card p-6"
                                    >
                                        <Quote className="mb-4 h-8 w-8 text-muted-foreground/40" />
                                        <p className="text-sm leading-relaxed text-card-foreground">{t.quote}</p>
                                        <div className="mt-6 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                                                {t.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{t.name}</p>
                                                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <MapPin className="h-3 w-3" />
                                                    {t.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 px-6 py-16 text-center sm:px-16">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Siap Menjelajahi Desa Manud Jaya?
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                                Bergabunglah dengan ribuan wisatawan yang telah menemukan keindahan alam tersembunyi di desa kami.
                                Petualangan Anda dimulai di sini.
                            </p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                            <div className="flex gap-6">
                                <a href="#destinations" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Wisata
                                </a>
                                <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Testimoni
                                </a>
                                <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                    Kontak
                                </a>
                            </div>
                            <p className="text-sm text-muted-foreground">&copy; 2026 Desa Manud Jaya. Hak cipta dilindungi.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
