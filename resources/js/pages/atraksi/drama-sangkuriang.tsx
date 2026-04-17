import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Drama,
    HandCoins,
    MapPin,
    Mountain,
    Users,
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

export default function DramaSangkuriang({
    ticket,
}: {
    ticket: TicketData | null;
}) {
    const { t } = useLanguage();
    const data = t.dramaSangkuriang;

    return (
        <>
            <Head title={`${data.title} — Desa Manud Jaya`}>
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
                        src="/images/drama_sangkuriang.png"
                        alt="Drama Musikal Sangkuriang"
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                {data.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {data.heroDesc}
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
                                {data.aboutTitle}
                            </h2>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {data.aboutP1}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {data.aboutP2}
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {data.aboutP3}
                            </p>

                            <h3 className="mt-10 text-xl font-semibold">
                                {data.highlightsTitle}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {data.highlights.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <Drama className="mt-0.5 h-5 w-5 shrink-0 text-purple-500" />
                                        <span className="text-muted-foreground">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-10 text-xl font-semibold">
                                {data.castTitle}
                            </h3>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                {data.cast.map((member) => (
                                    <div
                                        key={member}
                                        className="rounded-xl border border-border bg-card px-5 py-4"
                                    >
                                        <p className="text-sm text-muted-foreground">
                                            {member}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info sidebar */}
                        <div>
                            <div className="rounded-xl border border-border bg-card p-6">
                                <h3 className="text-lg font-semibold">
                                    {data.infoTitle}
                                </h3>
                                <dl className="mt-4 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="mt-0.5 h-5 w-5 text-purple-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {data.schedule}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {data.scheduleValue}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="mt-0.5 h-5 w-5 text-purple-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {data.duration}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {data.durationValue}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="mt-0.5 h-5 w-5 text-purple-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {data.venue}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {data.venueValue}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="mt-0.5 h-5 w-5 text-purple-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {data.capacity}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                {data.capacityValue}
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <HandCoins className="mt-0.5 h-5 w-5 text-purple-500" />
                                        <div>
                                            <dt className="text-sm font-medium">
                                                {data.ticketPrice}
                                            </dt>
                                            <dd className="text-sm text-muted-foreground">
                                                <ul className="mt-1 text-xs">
                                                    {data.ticketPrices.map(
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
                                accentColor="text-purple-500"
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
                        {data.backToHome}
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
                                {data.copyright}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
