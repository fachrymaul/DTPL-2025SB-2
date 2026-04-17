import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Backpack,
    Droplets,
    Ruler,
    Signpost,
    Waves,
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

export default function AirTerjunCahaya({
    ticket,
}: {
    ticket: TicketData | null;
}) {
    const { t } = useLanguage();

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
                <WisataNavbar />

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
                                {t.airTerjun.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {t.airTerjun.heroDesc}
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
                                {t.airTerjun.aboutTitle}
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.airTerjun.aboutP1}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.airTerjun.aboutP2}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.airTerjun.aboutP3}
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">
                                {t.airTerjun.highlightsTitle}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {t.airTerjun.highlights.map((item) => (
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
                                {t.airTerjun.bringTitle}
                            </h3>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                {t.airTerjun.bringItems.map((item) => (
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

                            {/* Gallery */}
                            <h3 className="mt-10 text-xl font-semibold">
                                {t.airTerjun.galleryTitle}
                            </h3>
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <img
                                        key={i}
                                        src={`/images/airterjun_galeri_${i + 1}.png`}
                                        alt={`${t.airTerjun.galleryTitle} Air Terjun ${i + 1}`}
                                        className="aspect-[4/3] rounded-xl object-cover"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Info sidebar */}
                        <div>
                            <div className="rounded-xl border border-border bg-card p-6">
                                <h3 className="text-lg font-semibold">
                                    {t.airTerjun.infoTitle}
                                </h3>
                                <dl className="mt-4 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Ruler className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.airTerjun.waterfallHeight}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {
                                                    t.airTerjun
                                                        .waterfallHeightValue
                                                }
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Signpost className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.airTerjun.trailDistance}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {t.airTerjun.trailDistanceValue}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Waves className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.airTerjun.swimming}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {t.airTerjun.swimmingValue}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Waves className="mt-0.5 h-5 w-5 text-blue-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.airTerjun.ticketPrice}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                <ul className="list-inside list-disc">
                                                    {t.airTerjun.ticketPrices.map(
                                                        (price) => (
                                                            <li key={price}>
                                                                {price}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>

                            <BuyTicketCard
                                ticket={ticket}
                                accentColor="text-blue-500"
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
                        {t.airTerjun.backToHome}
                    </Link>
                </section>
            </div>
        </>
    );
}
