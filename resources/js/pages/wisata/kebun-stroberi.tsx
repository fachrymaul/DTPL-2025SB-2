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

import BuyTicketCard from '@/components/buy-ticket-card';
import WisataNavbar from '@/components/wisata-navbar';
import { useLanguage } from '@/contexts/language-context';

type TicketData = {
    id: number;
    name: string;
    price: number;
    quota: number;
};

export default function KebunStroberi({
    ticket,
}: {
    ticket: TicketData | null;
}) {
    const { t } = useLanguage();

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
                <WisataNavbar />

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
                                {t.kebunStroberi.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {t.kebunStroberi.heroDesc}
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
                                {t.kebunStroberi.aboutTitle}
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.kebunStroberi.aboutP1}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.kebunStroberi.aboutP2}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {t.kebunStroberi.aboutP2}
                            </p>
                            <h3 className="mt-10 text-xl font-semibold">
                                {t.kebunStroberi.activitiesTitle}
                            </h3>
                            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                {[
                                    {
                                        icon: Cherry,
                                        title: t.kebunStroberi.activity1Title,
                                        desc: t.kebunStroberi.activity1Desc,
                                    },
                                    {
                                        icon: Leaf,
                                        title: t.kebunStroberi.activity2Title,
                                        desc: t.kebunStroberi.activity2Desc,
                                    },
                                    {
                                        icon: Camera,
                                        title: t.kebunStroberi.activity3Title,
                                        desc: t.kebunStroberi.activity3Desc,
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
                                        title: t.kebunStroberi.activity4Title,
                                        desc: t.kebunStroberi.activity4Desc,
                                    },
                                    {
                                        icon: Info,
                                        title: t.kebunStroberi.activity5Title,
                                        desc: t.kebunStroberi.activity5Desc,
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

                            {/* Gallery */}
                            <h3 className="mt-10 text-xl font-semibold">
                                {t.kebunStroberi.galleryTitle}
                            </h3>
                            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <img
                                        key={i}
                                        src={`/images/stroberi_galeri_${i + 1}.png`}
                                        alt={`${t.kebunStroberi.galleryTitle} Kebun Stroberi ${i + 1}`}
                                        className="aspect-[4/3] rounded-xl object-cover"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Info sidebar */}
                        <div>
                            <div className="rounded-xl border border-border bg-card p-6">
                                <h3 className="text-lg font-semibold">
                                    {t.kebunStroberi.infoTitle}
                                </h3>
                                <dl className="mt-4 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Cherry className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.kebunStroberi.harvestSeason}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {
                                                    t.kebunStroberi
                                                        .harvestSeasonValue
                                                }
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <HandCoins className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.kebunStroberi.ticketPrice}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                <ul className="mt-1 text-xs text-muted-foreground">
                                                    {t.kebunStroberi.ticketPrices.map(
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
                                    <div className="flex items-start gap-3">
                                        <Clock className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {t.kebunStroberi.openHours}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {t.kebunStroberi.openHoursValue}
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>

                            <BuyTicketCard
                                ticket={ticket}
                                accentColor="text-pink-500"
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
                        {t.kebunStroberi.backToHome}
                    </Link>
                </section>
            </div>
        </>
    );
}
