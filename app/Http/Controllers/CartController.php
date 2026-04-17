<?php

namespace App\Http\Controllers;

use App\Models\TicketVariant;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CartController extends Controller
{
    public function index(): Response
    {
        $cart = session('cart', []);
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

        return Inertia::render('cart/index', [
            'items' => $items,
            'total' => $total,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'ticket_variant_id' => 'required|exists:ticket_variants,id',
            'quantity' => 'required|integer|min:1|max:10',
        ]);

        $variant = TicketVariant::with('ticket')->findOrFail($request->ticket_variant_id);

        if ($variant->ticket->quota < $request->quantity) {
            return back()->withErrors(['quantity' => 'Kuota tiket tidak mencukupi.']);
        }

        $cart = session('cart', []);
        $existingIndex = collect($cart)->search(fn ($item) => ($item['ticket_variant_id'] ?? null) == $request->ticket_variant_id);

        if ($existingIndex !== false) {
            $cart[$existingIndex]['quantity'] += $request->quantity;
        } else {
            $cart[] = [
                'ticket_variant_id' => (int) $request->ticket_variant_id,
                'quantity' => (int) $request->quantity,
            ];
        }

        session(['cart' => $cart]);

        return back()->with('success', 'Tiket berhasil ditambahkan ke keranjang.');
    }

    public function update(Request $request, int $variantId): RedirectResponse
    {
        $request->validate([
            'quantity' => 'required|integer|min:1|max:10',
        ]);

        $cart = session('cart', []);
        $index = collect($cart)->search(fn ($item) => ($item['ticket_variant_id'] ?? null) == $variantId);

        if ($index !== false) {
            $cart[$index]['quantity'] = (int) $request->quantity;
            session(['cart' => array_values($cart)]);
        }

        return back();
    }

    public function destroy(int $variantId): RedirectResponse
    {
        $cart = session('cart', []);
        $cart = collect($cart)->reject(fn ($item) => ($item['ticket_variant_id'] ?? null) == $variantId)->values()->all();
        session(['cart' => $cart]);

        return back();
    }
}
