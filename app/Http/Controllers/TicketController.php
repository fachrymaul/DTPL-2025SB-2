<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TicketController extends Controller
{
    public function index(Request $request): Response
    {
        $tickets = Ticket::with(['variants' => fn ($q) => $q->where('is_active', true)])
            ->where('is_active', true)
            ->when($request->category, fn ($q, $cat) => $q->where('category', $cat))
            ->orderBy('category')
            ->orderBy('name')
            ->get();

        $cart = session('cart', []);

        return Inertia::render('tickets/index', [
            'tickets' => $tickets,
            'cart' => $cart,
            'selectedCategory' => $request->category,
        ]);
    }
}
