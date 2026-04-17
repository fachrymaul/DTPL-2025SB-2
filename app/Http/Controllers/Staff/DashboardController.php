<?php

namespace App\Http\Controllers\Staff;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Transaction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $stats = [
            'total_orders' => Order::count(),
            'pending_orders' => Order::where('status', 'pending')->count(),
            'completed_orders' => Order::where('status', 'completed')->count(),
            'cancelled_orders' => Order::where('status', 'cancelled')->count(),
            'total_transactions' => Transaction::count(),
            'pending_transactions' => Transaction::where('status', 'pending')->count(),
            'verified_transactions' => Transaction::where('status', 'verified')->count(),
            'rejected_transactions' => Transaction::where('status', 'rejected')->count(),
            'total_revenue' => Transaction::where('status', 'verified')->sum('amount'),
        ];

        $recentOrders = Order::with(['user', 'transaction', 'items.ticket'])
            ->latest()
            ->take(20)
            ->get();

        return Inertia::render('staff/dashboard', [
            'stats' => $stats,
            'recentOrders' => $recentOrders,
        ]);
    }

    public function updateTransaction(Request $request, Transaction $transaction): RedirectResponse
    {
        $request->validate([
            'status' => 'required|in:verified,rejected',
            'notes' => 'nullable|string|max:500',
        ]);

        $transaction->update([
            'status' => $request->status,
            'notes' => $request->notes,
            'paid_at' => $request->status === 'verified' ? now() : null,
        ]);

        $order = $transaction->order;
        $order->update([
            'status' => $request->status === 'verified' ? 'completed' : 'cancelled',
        ]);

        $statusLabel = $request->status === 'verified' ? 'diverifikasi' : 'ditolak';

        return back()->with('success', "Transaksi {$order->order_number} berhasil {$statusLabel}.");
    }
}
