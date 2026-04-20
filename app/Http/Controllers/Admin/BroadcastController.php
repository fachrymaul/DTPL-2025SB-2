<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Jobs\SendSegmentBroadcast;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BroadcastController extends Controller
{
    public function index(): Response
    {
        $total = User::whereNotNull('email_verified_at')->count();

        $breakdown = User::whereNotNull('email_verified_at')
            ->get(['id', 'date_of_birth', 'gender'])
            ->groupBy(fn (User $u) => $u->segment())
            ->map->count()
            ->sortKeys();

        return Inertia::render('admin/broadcast', [
            'totalRecipients' => $total,
            'segmentBreakdown' => $breakdown,
        ]);
    }

    public function send(): RedirectResponse
    {
        SendSegmentBroadcast::dispatch();

        return back()->with('success', 'Email broadcast sedang diproses di background.');
    }
}
