<?php

namespace App\Jobs;

use App\Mail\SegmentBroadcastMail;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendSegmentBroadcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $timeout = 600;

    public function handle(): void
    {
        User::whereNotNull('email')
            ->whereNotNull('email_verified_at')
            ->chunkById(200, function ($users) {
                foreach ($users as $user) {
                    try {
                        Mail::to($user->email)->send(new SegmentBroadcastMail($user));
                    } catch (\Throwable $e) {
                        Log::error("Segment broadcast failed for user {$user->id}: ".$e->getMessage());
                    }
                }
            });
    }
}
