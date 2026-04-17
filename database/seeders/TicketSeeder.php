<?php

namespace Database\Seeders;

use App\Models\Ticket;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    public function run(): void
    {
        $tickets = [
            [
                'name' => 'Tiket Masuk Puncak Manud',
                'description' => 'Tiket masuk kawasan wisata Puncak Manud dengan pemandangan alam yang memukau. Termasuk akses ke area foto dan gazebo.',
                'category' => 'wisata',
                'price' => 25000,
                'quota' => 100,
                'is_active' => true,
                'variants' => [
                    ['name' => 'Dewasa', 'price' => 25000, 'unit' => 'orang'],
                ],
            ],
            [
                'name' => 'Tiket Masuk Kebun Stroberi',
                'description' => 'Tiket masuk kebun stroberi dengan pengalaman petik buah langsung dari kebun.',
                'category' => 'wisata',
                'price' => 15000,
                'quota' => 50,
                'is_active' => true,
                'variants' => [
                    ['name' => 'Tiket Masuk Kebun', 'price' => 15000, 'unit' => 'orang'],
                    ['name' => 'Paket Petik Strawberry', 'price' => 50000, 'unit' => '500 gram'],
                ],
            ],
            [
                'name' => 'Tiket Air Terjun Cahaya',
                'description' => 'Tiket masuk kawasan Air Terjun Cahaya. Termasuk akses kolam alami dan area piknik.',
                'category' => 'wisata',
                'price' => 10000,
                'quota' => 80,
                'is_active' => true,
                'variants' => [
                    ['name' => 'Tiket Masuk', 'price' => 10000, 'unit' => 'orang'],
                    ['name' => 'Tiket Trekking Area', 'price' => 5000, 'unit' => 'orang'],
                ],
            ],
            [
                'name' => 'Konser Kecapi Suling',
                'description' => 'Tiket pertunjukan musik tradisional kecapi suling. Nikmati alunan musik Sunda yang menenangkan.',
                'category' => 'atraksi',
                'price' => 25000,
                'quota' => 200,
                'is_active' => true,
                'variants' => [
                    ['name' => 'Dewasa', 'price' => 25000, 'unit' => 'orang'],
                    ['name' => 'Anak-anak (6-12 tahun)', 'price' => 15000, 'unit' => 'orang'],
                    ['name' => 'Anak di bawah 6 tahun', 'price' => 0, 'unit' => 'orang'],
                ],
            ],
            [
                'name' => 'Drama Sangkuriang',
                'description' => 'Tiket pertunjukan drama tradisional Sangkuriang. Saksikan legenda Sunda yang epik.',
                'category' => 'atraksi',
                'price' => 35000,
                'quota' => 150,
                'is_active' => true,
                'variants' => [
                    ['name' => 'Reguler', 'price' => 35000, 'unit' => 'orang'],
                    ['name' => 'VIP (baris depan)', 'price' => 60000, 'unit' => 'orang'],
                    ['name' => 'Anak-anak (6-12 tahun)', 'price' => 20000, 'unit' => 'orang'],
                    ['name' => 'Anak di bawah 6 tahun', 'price' => 0, 'unit' => 'orang'],
                ],
            ],
            [
                'name' => 'Petik Strawberry Experience',
                'description' => 'Paket pengalaman petik stroberi di kebun. Pilih tiket masuk atau paket petik.',
                'category' => 'atraksi',
                'price' => 15000,
                'quota' => 30,
                'is_active' => true,
                'variants' => [
                    ['name' => 'Tiket Masuk Kebun', 'price' => 15000, 'unit' => 'orang'],
                    ['name' => 'Paket Petik (mulai dari)', 'price' => 30000, 'unit' => 'paket'],
                ],
            ],
            [
                'name' => 'Rafting Sungai Cimanud',
                'description' => 'Paket rafting seru di Sungai Cimanud. Termasuk peralatan safety dan pemandu.',
                'category' => 'atraksi',
                'price' => 150000,
                'quota' => 20,
                'is_active' => true,
                'variants' => [
                    ['name' => 'Paket Reguler', 'price' => 150000, 'unit' => 'orang'],
                    ['name' => 'Paket Premium (lunch + dokumentasi)', 'price' => 250000, 'unit' => 'orang'],
                ],
            ],
        ];

        foreach ($tickets as $ticketData) {
            $variants = $ticketData['variants'];
            unset($ticketData['variants']);

            $ticket = Ticket::create($ticketData);

            foreach ($variants as $index => $variant) {
                $ticket->variants()->create([
                    ...$variant,
                    'sort_order' => $index,
                    'is_active' => true,
                ]);
            }
        }
    }
}
