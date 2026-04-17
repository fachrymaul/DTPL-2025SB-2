import { Head, Link } from '@inertiajs/react';
import { ChevronDown, HelpCircle, Mountain } from 'lucide-react';
import { useState } from 'react';

import WisataNavbar from '@/components/wisata-navbar';

type FAQItem = {
    question: string;
    answer: string;
};

const paymentFAQs: FAQItem[] = [
    {
        question: 'Metode pembayaran apa saja yang tersedia?',
        answer: 'Saat ini kami menerima pembayaran melalui transfer bank. Anda dapat melakukan transfer dari bank mana saja (BCA, BNI, Mandiri, BRI, dll) ke rekening resmi Desa Manud Jaya.',
    },
    {
        question: 'Bagaimana cara melakukan pembayaran?',
        answer: 'Setelah memilih tiket dan checkout, Anda akan diberikan informasi rekening tujuan transfer. Lakukan transfer sesuai jumlah yang tertera, lalu isi formulir konfirmasi pembayaran dengan data rekening pengirim Anda.',
    },
    {
        question: 'Berapa lama proses verifikasi pembayaran?',
        answer: 'Tim kami akan memverifikasi pembayaran Anda dalam waktu 1x24 jam kerja. Anda akan mendapatkan notifikasi status pembayaran melalui halaman pesanan.',
    },
    {
        question: 'Apakah bisa membatalkan pesanan?',
        answer: 'Pesanan yang belum diverifikasi dapat dibatalkan. Setelah pembayaran diverifikasi, pembatalan harus melalui layanan pelanggan kami melalui halaman kontak.',
    },
    {
        question: 'Bagaimana jika transfer gagal atau nominal salah?',
        answer: 'Jika transfer gagal, Anda dapat membuat pesanan baru. Jika nominal yang ditransfer berbeda dengan total pesanan, silakan hubungi tim kami melalui halaman kontak untuk penyelesaian.',
    },
];

const ticketingFAQs: FAQItem[] = [
    {
        question: 'Bagaimana cara membeli tiket?',
        answer: 'Kunjungi halaman "Beli Tiket", pilih tiket yang diinginkan, tambahkan ke keranjang, lalu lakukan checkout. Anda perlu membuat akun atau login terlebih dahulu untuk melakukan pembelian.',
    },
    {
        question: 'Apakah tiket berlaku untuk tanggal tertentu?',
        answer: 'Tiket yang dibeli berlaku untuk kunjungan dalam waktu 30 hari sejak tanggal pembelian. Pastikan untuk menggunakan tiket sebelum masa berlaku habis.',
    },
    {
        question: 'Berapa batas maksimal pembelian tiket?',
        answer: 'Anda dapat membeli maksimal 10 tiket per jenis dalam satu pesanan. Jika membutuhkan tiket dalam jumlah besar (rombongan), silakan hubungi kami melalui halaman kontak.',
    },
    {
        question: 'Bagaimana cara menggunakan tiket yang sudah dibeli?',
        answer: 'Setelah pembayaran diverifikasi, tunjukkan nomor pesanan dan bukti pembayaran yang terverifikasi di loket masuk destinasi wisata. Tim kami akan memvalidasi tiket Anda.',
    },
    {
        question: 'Apakah tiket bisa dipindahtangankan?',
        answer: 'Ya, tiket dapat digunakan oleh orang lain selama masih dalam masa berlaku. Pastikan untuk memberikan nomor pesanan kepada pengguna tiket.',
    },
];

const technicalFAQs: FAQItem[] = [
    {
        question: 'Bagaimana jika saya lupa password akun?',
        answer: 'Klik "Lupa password" pada halaman login. Masukkan email yang terdaftar, dan kami akan mengirimkan link reset password ke email Anda.',
    },
    {
        question: 'Apakah data pembayaran saya aman?',
        answer: 'Data pembayaran Anda disimpan secara aman dan terenkripsi. Kami tidak menyimpan informasi sensitif seperti PIN atau password bank Anda.',
    },
    {
        question: 'Browser apa yang direkomendasikan?',
        answer: 'Kami merekomendasikan menggunakan browser terbaru seperti Google Chrome, Mozilla Firefox, Safari, atau Microsoft Edge untuk pengalaman terbaik.',
    },
    {
        question: 'Bagaimana cara menghubungi customer service?',
        answer: 'Anda dapat menghubungi kami melalui halaman Kontak di website ini. Tim kami siap membantu Anda pada hari kerja pukul 08:00 - 17:00 WIB.',
    },
];

function FAQSection({ title, items }: { title: string; items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg border border-border bg-card"
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-accent/50"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <span>{item.question}</span>
                            <ChevronDown
                                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                                    openIndex === index ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="border-t border-border px-5 py-4">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <>
            <Head title="FAQ — Pertanyaan Umum" />
            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar />

                <main className="mx-auto max-w-3xl px-6 py-12">
                    <div className="mb-8 text-center">
                        <HelpCircle className="mx-auto mb-3 h-10 w-10 text-primary" />
                        <h1 className="text-3xl font-bold tracking-tight">
                            Pertanyaan Umum (FAQ)
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Temukan jawaban untuk pertanyaan seputar pembayaran
                            dan pembelian tiket.
                        </p>
                    </div>

                    <FAQSection title="Pembayaran" items={paymentFAQs} />
                    <FAQSection
                        title="Tiket & Pemesanan"
                        items={ticketingFAQs}
                    />
                    <FAQSection
                        title="Teknis & Lainnya"
                        items={technicalFAQs}
                    />

                    <div className="mt-8 rounded-xl border border-border bg-muted/50 p-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            Masih ada pertanyaan? Hubungi kami melalui halaman{' '}
                            <Link
                                href="/kontak"
                                className="font-medium text-primary hover:underline"
                            >
                                Kontak
                            </Link>
                            .
                        </p>
                    </div>
                </main>

                <footer className="border-t border-border">
                    <div className="mx-auto max-w-7xl px-6 py-8">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <Mountain className="h-4 w-4 text-primary" />
                            <span>&copy; 2026 Desa Manud Jaya</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
