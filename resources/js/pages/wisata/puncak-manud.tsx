import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Clock,
    Footprints,
    Info,
    Mountain,
    Signpost,
    TrendingUp,
} from 'lucide-react';

import BuyTicketCard from '@/components/buy-ticket-card';
import WisataNavbar from '@/components/wisata-navbar';
import { useLanguage } from '@/contexts/language-context';

type TicketData = {
    id: number;
    name: string;
    price: number;
    quota: number;
};

export default function PuncakManud({ ticket }: { ticket: TicketData | null }) {
    const { t } = useLanguage();

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
                <WisataNavbar />

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
                                {t.puncakManud.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {t.puncakManud.heroDesc}
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
                                {t.puncakManud.aboutTitle}
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.puncakManud.aboutP1}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.puncakManud.aboutP2}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.puncakManud.aboutP3}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.puncakManud.aboutP4}
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">
                                {t.puncakManud.activitiesTitle}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {t.puncakManud.activities.map((item) => (
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

                            {/* Gallery */}
                            <h3 className="mt-10 text-xl font-semibold">
                                {t.puncakManud.galleryTitle}
                            </h3>
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <img
                                        key={i}
                                        src={`/images/puncak_galeri_${i + 1}.png`}
                                        alt={`${t.puncakManud.galleryTitle} Puncak Manud ${i + 1}`}
                                        className="aspect-[4/3] rounded-xl object-cover"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Info sidebar */}
                        <div>
                            <div className="rounded-xl border border-border bg-card p-6">
                                <h3 className="text-lg font-semibold">
                                    {t.puncakManud.infoTitle}
                                </h3>
                                <dl className="mt-4 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Mountain className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.puncakManud.elevation}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {t.puncakManud.elevationValue}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.puncakManud.hikeDuration}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {
                                                    t.puncakManud
                                                        .hikeDurationValue
                                                }
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Signpost className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.puncakManud.elevationGain}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {
                                                    t.puncakManud
                                                        .elevationGainValue
                                                }
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Footprints className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.puncakManud.accessPos1}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {t.puncakManud.accessPos1Value}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Info className="mt-0.5 h-5 w-5 text-emerald-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.puncakManud.tektokReq}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {t.puncakManud.tektokReqValue}
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>

                            <BuyTicketCard
                                ticket={ticket}
                                accentColor="text-emerald-500"
                            />
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
                        {t.puncakManud.backToHome}
                    </Link>
                </section>
            </div>
        </>
    );
}
