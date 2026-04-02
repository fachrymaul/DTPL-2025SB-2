import { Link, usePage } from '@inertiajs/react';
import { Calendar, MapPin, Music, Percent, Tag, X } from 'lucide-react';
import { useState } from 'react';

import { useLanguage } from '@/contexts/language-context';

export default function PromoPopup() {
    const { t } = useLanguage();
    const { flash } = usePage<{ flash: { justLoggedIn?: boolean } }>().props;
    const [open, setOpen] = useState(() => !!flash?.justLoggedIn);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setOpen(false)}
            />

            {/* Popup */}
            <div className="relative z-10 w-full max-w-lg animate-in rounded-2xl border border-border bg-background shadow-2xl duration-300 zoom-in-95 fade-in">
                {/* Close button */}
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Header with gradient */}
                <div className="rounded-t-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-5 text-white">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                            <Percent className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs font-medium tracking-wide uppercase opacity-90">
                                {t.promoPopup.badge}
                            </p>
                            <h2 className="text-xl font-bold">
                                {t.promoPopup.title}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-5">
                    <p className="text-sm text-muted-foreground">
                        {t.promoPopup.description}
                    </p>

                    {/* Event card */}
                    <div className="mt-4 rounded-xl border border-border bg-muted/50 p-4">
                        <div className="flex items-center gap-2">
                            <Music className="h-5 w-5 text-amber-500" />
                            <h3 className="font-semibold">
                                {t.promoPopup.eventTitle}
                            </h3>
                        </div>
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 shrink-0" />
                                <span>{t.promoPopup.eventDate}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 shrink-0" />
                                <span>{t.promoPopup.eventLocation}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Tag className="h-4 w-4 shrink-0" />
                                <span className="font-semibold text-green-600">
                                    {t.promoPopup.eventDiscount}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Promo code — hidden until payment feature is ready */}
                    {/* <div className="mt-4 rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 px-4 py-3 text-center dark:bg-amber-950/30">
                        <p className="text-xs text-muted-foreground">
                            {t.promoPopup.codeLabel}
                        </p>
                        <p className="mt-1 text-lg font-bold tracking-widest text-amber-600">
                            {t.promoPopup.code}
                        </p>
                    </div> */}
                </div>

                {/* Footer */}
                <div className="flex gap-3 border-t border-border px-6 py-4">
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                    >
                        {t.promoPopup.dismissBtn}
                    </button>
                    <Link
                        href="/atraksi/konser-kecapi-suling"
                        onClick={() => setOpen(false)}
                        className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        {t.promoPopup.ctaBtn}
                    </Link>
                </div>
            </div>
        </div>
    );
}
