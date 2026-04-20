<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SegmentBroadcastMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public User $user) {}

    public function envelope(): Envelope
    {
        $subjects = [
            'A' => 'Rute petualangan baru menanti kamu',
            'B' => 'Hari tenang di kebun, siap di-capture',
            'C' => 'Pelarian akhir pekan tanpa drama',
            'D' => 'Paket staycation untuk kamu & teman',
            'E' => 'Liburan keluarga yang aman & nyaman',
            'F' => 'Pengalaman desa yang bermakna',
            'G' => 'Udara sejuk untuk hari santaimu',
            'H' => 'Cerita & rasa dari Desa Manud Jaya',
        ];

        $segment = $this->user->segment();

        return new Envelope(
            subject: $subjects[$segment] ?? 'Kabar dari Desa Manud Jaya',
        );
    }

    public function content(): Content
    {
        $segment = strtolower($this->user->segment());

        return new Content(
            view: "emails.segments.{$segment}",
            with: [
                'user' => $this->user,
            ],
        );
    }
}
