<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\TicketVariant;
use App\Models\Transaction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class CheckoutController extends Controller
{
    public function index(): Response
    {
        $cart = session('cart', []);

        if (empty($cart)) {
            return Inertia::render('cart/index', [
                'items' => [],
                'total' => 0,
            ]);
        }

        $variantIds = collect($cart)->pluck('ticket_variant_id')->filter()->all();
        $variants = TicketVariant::with('ticket')->whereIn('id', $variantIds)->get()->keyBy('id');

        $items = collect($cart)->map(function ($item) use ($variants) {
            $variant = $variants->get($item['ticket_variant_id'] ?? null);
            if (! $variant) {
                return null;
            }

            return [
                'ticket_variant_id' => $variant->id,
                'ticket_id' => $variant->ticket_id,
                'quantity' => $item['quantity'],
                'ticket' => $variant->ticket,
                'variant' => $variant,
                'subtotal' => $variant->price * $item['quantity'],
            ];
        })->filter()->values()->all();

        $total = collect($items)->sum('subtotal');

        return Inertia::render('checkout/index', [
            'items' => $items,
            'total' => $total,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'bank_name' => 'required|string|max:100',
            'account_name' => 'required|string|max:100',
            'account_number' => 'required|string|max:50',
        ]);

        $cart = session('cart', []);

        if (empty($cart)) {
            return redirect()->route('tickets.index')->withErrors(['cart' => 'Keranjang kosong.']);
        }

        $variantIds = collect($cart)->pluck('ticket_variant_id')->filter()->all();
        $variants = TicketVariant::with('ticket')->whereIn('id', $variantIds)->get()->keyBy('id');

        $order = DB::transaction(function () use ($request, $cart, $variants) {
            $total = 0;
            $orderItems = [];

            foreach ($cart as $item) {
                $variant = $variants->get($item['ticket_variant_id'] ?? null);
                if (! $variant || $variant->ticket->quota < $item['quantity']) {
                    throw new \Exception("Kuota tiket {$variant?->ticket?->name} tidak mencukupi.");
                }

                $subtotal = $variant->price * $item['quantity'];
                $total += $subtotal;

                $orderItems[] = [
                    'ticket_id' => $variant->ticket_id,
                    'ticket_variant_id' => $variant->id,
                    'variant_name' => $variant->name,
                    'quantity' => $item['quantity'],
                    'price' => $variant->price,
                ];

                $variant->ticket->decrement('quota', $item['quantity']);
            }

            $order = Order::create([
                'order_number' => Order::generateOrderNumber(),
                'user_id' => $request->user()->id,
                'total' => $total,
                'status' => 'pending',
            ]);

            foreach ($orderItems as $orderItem) {
                $order->items()->create($orderItem);
            }

            Transaction::create([
                'order_id' => $order->id,
                'payment_method' => 'bank_transfer',
                'bank_name' => $request->bank_name,
                'account_name' => $request->account_name,
                'account_number' => $request->account_number,
                'amount' => $total,
                'status' => 'pending',
            ]);

            return $order;
        });

        session()->forget('cart');

        return redirect()->route('orders.show', $order)->with('success', 'Pesanan berhasil dibuat! Silakan tunggu konfirmasi pembayaran.');
    }
}
