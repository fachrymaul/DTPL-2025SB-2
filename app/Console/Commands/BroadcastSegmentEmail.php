<?php

namespace App\Console\Commands;

use App\Jobs\SendSegmentBroadcast;
use Illuminate\Console\Command;

class BroadcastSegmentEmail extends Command
{
    protected $signature = 'mail:broadcast {--sync : Run synchronously instead of queueing}';

    protected $description = 'Send segment-tailored emails to every verified user. Each user gets the template matching their segment (A–H).';

    public function handle(): int
    {
        if ($this->option('sync')) {
            SendSegmentBroadcast::dispatchSync();
            $this->info('Broadcast sent (sync).');
        } else {
            SendSegmentBroadcast::dispatch();
            $this->info('Broadcast queued.');
        }

        return self::SUCCESS;
    }
}
