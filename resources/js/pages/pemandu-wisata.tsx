import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Globe, Mountain, Phone, Tag, User } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';
import { useLanguage } from '@/contexts/language-context';

export default function PemanduWisata() {
    const { t } = useLanguage();

    const guides = t.pemanduWisata.guides;

    return (
        <>
            <Head title={`${t.pemanduWisata.title} — Desa Manud Jaya`}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar />

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/pemandu_wisata.png"
                        alt="Pemandu Wisata"
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                {t.pemanduWisata.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {t.pemanduWisata.heroDesc}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Guide List */}
                <main className="mx-auto max-w-7xl px-6 py-16">
                    <h2 className="text-2xl font-bold">
                        {t.pemanduWisata.listTitle}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                        {t.pemanduWisata.listDesc}
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {guides.map((guide) => (
                            <div
                                key={guide.name}
                                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {guide.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {guide.specialty}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-3">
                                    {/* Languages */}
                                    <div className="flex items-start gap-3">
                                        <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <div>
                                            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                                                {t.pemanduWisata.languageLabel}
                                            </p>
                                            <p className="text-sm">
                                                {guide.languages}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rate */}
                                    <div className="flex items-start gap-3">
                                        <Tag className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <div>
                                            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                                                {t.pemanduWisata.rateLabel}
                                            </p>
                                            <p className="text-sm font-semibold">
                                                {guide.rate}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="flex items-start gap-3">
                                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <div>
                                            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                                                {t.pemanduWisata.contactLabel}
                                            </p>
                                            <p className="text-sm">
                                                {guide.phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Back link */}
                <section className="mx-auto max-w-7xl px-6 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t.pemanduWisata.backToHome}
                    </Link>
                </section>

                {/* Footer */}
                <footer className="border-t border-border">
                    <div className="mx-auto max-w-7xl px-6 py-12">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <Mountain className="h-5 w-5 text-primary" />
                                <span>Desa Manud Jaya</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {t.pemanduWisata.copyright}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
