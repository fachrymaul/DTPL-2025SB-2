import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Mountain } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

export default function AkomodasiTransportasi({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head title="Akomodasi & Transportasi — Desa Manud Jaya">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar canRegister={canRegister} />

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/akomodasi_hero.png"
                        alt="Akomodasi & Transportasi"
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Akomodasi & Transportasi
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                Panduan lengkap penginapan dan perjalanan menuju
                                Desa Manud Jaya.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Article */}
                <article className="mx-auto max-w-3xl px-6 py-16">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* Transportasi */}
                        <h2 className="mt-16 text-2xl font-bold">
                            Transportasi Menuju Desa Wisata Manud Jaya
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Desa Manud Jaya dapat diakses dari stasiun kereta
                            sukabumi dengan menggunakan kendaraan pribadi maupun
                            transportasi lokal seperti ojek wisata dan mobil
                            travel. Perjalanan menuju desa menawarkan
                            pemandangan alam pegunungan yang indah dan udara
                            yang semakin sejuk ketika mendekati kawasan desa.
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Jarak ke Desa Manud Jaya dari stasiun sukabumi: ±18
                            km
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            Perkiraan waktu perjalanan:
                        </h3>
                        <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                            <li>Mobil : 35 – 45 menit</li>
                            <li>Motor : 30 – 40 menit</li>
                        </ul>

                        <h3 className="mt-10 text-xl font-semibold">
                            Transportasi Lokal
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            <ol className="list-decimal pl-5">
                                <li>
                                    <h4>Ojek Wisata Manud Jaya</h4>
                                    <ul className="mt-2 list-disc pl-5">
                                        <li> PIC: Pak Rudi </li>
                                        <li>Nomor HP: 0812-3456-8890</li>
                                        <li>
                                            Harga:
                                            <ul className="mt-2 list-disc pl-5">
                                                <li>
                                                    Stasiun – Desa Manud Jaya :
                                                    Rp35.000 / orang
                                                </li>
                                                <li>
                                                    Desa – Air Terjun : Rp15.000
                                                </li>
                                                <li>
                                                    Desa – Basecamp Gunung :
                                                    Rp20.000
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Spesifikasi Kendaraan: Motor trail /
                                            motor bebek wisata
                                        </li>
                                        <li>Kapasitas : 1 penumpang</li>
                                        <li>
                                            Cocok untuk jalur desa dan jalan
                                            pegunungan
                                        </li>
                                        <li>
                                            <ul className="mt-2 list-disc pl-5">
                                                Estimasi Perjalanan:
                                                <li>
                                                    Stasiun → Desa : 30 menit
                                                </li>
                                                <li>
                                                    Desa → Air Terjun : 10 menit
                                                </li>
                                                <li>
                                                    Desa → Basecamp Gunung : 15
                                                    menit
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Mobil Travel Wisata</h4>
                                    <ul className="mt-2 list-disc pl-5">
                                        <li>PIC: Ibu Sari</li>
                                        <li>Nomor HP: 0813-9988-2211</li>
                                        <li>
                                            Harga: Stasiun – Desa Manud Jaya :
                                            Rp150.000 / mobil
                                        </li>
                                        <li>
                                            Spesifikasi Kendaraan: Toyota Avanza
                                            / Daihatsu Xenia
                                        </li>
                                        <li>Kapasitas : 5 penumpang</li>
                                        <li>
                                            Fasilitas:
                                            <ul className="mt-2 list-disc pl-5">
                                                <li>AC</li>
                                                <li>
                                                    Bagasi untuk barang
                                                    wisatawan
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Estimasi Perjalanan: Stasiun → Desa
                                            : 40 menit
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    {' '}
                                    Sewa Motor Wisata
                                    <ul className="mt-2 list-disc pl-5">
                                        <li>PIC: Pak Dani</li>
                                        <li>Nomor HP: 0812-7722-5566</li>
                                        <li>
                                            Harga: Sewa motor : Rp80.000 / hari
                                        </li>
                                        <li>Helm : termasuk</li>
                                        <li>
                                            Spesifikasi Kendaraan: Honda Beat /
                                            Yamaha Mio
                                        </li>
                                        <li>Kapasitas : 2 orang</li>
                                        <li>Bahan bakar : bensin</li>
                                        <li>
                                            Estimasi Perjalanan: Stasiun → Desa
                                            : 35 menit
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            Kendaraan Pribadi / Rental
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            Akses jalan menuju desa sudah beraspal dengan baik.
                            Dari pusat kota, ambil Jalan Raya Pegunungan ke arah
                            selatan, lalu ikuti papan petunjuk menuju Desa Manud
                            Jaya. Perjalanan memakan waktu sekitar 2 jam.
                            Tersedia area parkir luas di pusat desa. Bagi yang
                            tidak membawa kendaraan, rental mobil tersedia di
                            kota dengan harga mulai{' '}
                            <strong>Rp 300.000 per hari</strong>. Pastikan
                            kendaraan dalam kondisi baik karena sebagian jalan
                            berupa tanjakan.
                        </p>
                        {/* Penginapan */}
                        <h2 className="text-2xl font-bold">
                            Penginapan di Desa Manud Jaya{' '}
                        </h2>
                        <ol className="mt-3 list-decimal space-y-8 pl-5 text-muted-foreground">
                            <li>
                                <h4 className="font-semibold text-foreground">
                                    Manud Jaya Homestay
                                </h4>
                                <ul className="mt-2 list-disc pl-5">
                                    <li>PIC: Ibu Lina</li>
                                    <li>Nomor HP: 0813-3344-7788</li>
                                    <li>Harga: Rp150.000 / malam</li>
                                    <li>
                                        Fasilitas:
                                        <ul className="mt-2 list-disc pl-5">
                                            <li>1 kamar tidur</li>
                                            <li>Tempat tidur double</li>
                                            <li>Kamar mandi dalam</li>
                                            <li>Air panas</li>
                                            <li>WiFi</li>
                                            <li>Sarapan sederhana</li>
                                        </ul>
                                    </li>
                                    <li>Kapasitas: 2 – 3 orang</li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="font-semibold text-foreground">
                                    Penginapan Bukit Manud
                                </h4>
                                <ul className="mt-2 list-disc pl-5">
                                    <li>PIC: Pak Agus</li>
                                    <li>Nomor HP: 0812-2233-4455</li>
                                    <li>Harga: Rp250.000 / malam</li>
                                    <li>
                                        Fasilitas:
                                        <ul className="mt-2 list-disc pl-5">
                                            <li>
                                                Kamar dengan pemandangan
                                                pegunungan
                                            </li>
                                            <li>Kamar mandi dalam</li>
                                            <li>Air panas</li>
                                            <li>Balkon</li>
                                            <li>Area parkir</li>
                                        </ul>
                                    </li>
                                    <li>Kapasitas: 2 – 4 orang</li>
                                </ul>
                            </li>
                        </ol>

                        <h3 className="mt-10 text-xl font-semibold">
                            Basecamp Pendaki Gunung Manud Jaya
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            Bagi para pendaki yang ingin melakukan pendakian ke
                            Puncak Gunung Manud Jaya (2110 mdpl), tersedia
                            basecamp pendaki yang menyediakan tempat istirahat
                            sederhana sebelum memulai pendakian.
                        </p>
                        <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                            <li>Nama Basecamp: Basecamp Pendaki Manud Jaya</li>
                            <li>PIC: Pak Arman</li>
                            <li>Nomor HP: 0813-5566-7788</li>
                            <li>Harga Menginap: Rp20.000 / orang / malam</li>
                            <li>
                                Fasilitas:
                                <ul className="mt-2 list-disc pl-5">
                                    <li>Area istirahat pendaki</li>
                                    <li>Toilet</li>
                                    <li>Mushola</li>
                                    <li>Warung makan</li>
                                    <li>Tempat parkir kendaraan</li>
                                    <li>Informasi jalur pendakian</li>
                                </ul>
                            </li>
                            <li>
                                Layanan Tambahan:
                                <ul className="mt-2 list-disc pl-5">
                                    <li>
                                        Ojek Basecamp → Pos 1 : Rp40.000 / orang
                                    </li>
                                    <li>Guide pendakian : Rp150.000 / grup</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </article>

                {/* Back link */}
                <section className="mx-auto max-w-3xl px-6 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Beranda
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
