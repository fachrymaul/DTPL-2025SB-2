<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class OrderController extends Controller
{
    public function index(Request $request): Response
    {
        $orders = $request->user()
            ->orders()
            ->with(['items.ticket', 'transaction'])
            ->latest()
            ->get();

        return Inertia::render('orders/index', [
            'orders' => $orders,
        ]);
    }

    public function show(Request $request, Order $order): Response
    {
        $this->authorizeView($request, $order);

        $order->load(['items.ticket', 'transaction']);

        return Inertia::render('orders/show', [
            'order' => $order,
        ]);
    }

    public function invoice(Request $request, Order $order): SymfonyResponse
    {
        $this->authorizeView($request, $order);

        $order->load(['items.ticket', 'transaction', 'user']);

        $statusLabel = fn (string $status): string => match ($status) {
            'pending' => 'Menunggu Verifikasi',
            'completed' => 'Selesai',
            'cancelled' => 'Dibatalkan',
            'verified' => 'Terverifikasi',
            'rejected' => 'Ditolak',
            default => ucfirst($status),
        };

        $formatRupiah = fn (int $amount): string => 'Rp '.number_format($amount, 0, ',', '.');

        $pdf = Pdf::loadView('invoices.order', [
            'order' => $order,
            'statusLabel' => $statusLabel,
            'formatRupiah' => $formatRupiah,
        ])->setPaper('a4', 'portrait');

        return $pdf->download("invoice-{$order->order_number}.pdf");
    }

    private function authorizeView(Request $request, Order $order): void
    {
        $user = $request->user();

        if ($order->user_id === $user->id) {
            return;
        }

        if (in_array($user->role, ['admin', 'staff'], true)) {
            return;
        }

        abort(403);
    }
}
