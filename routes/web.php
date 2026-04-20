<?php

use App\Http\Controllers\Admin\BroadcastController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Staff\DashboardController as StaffDashboardController;
use App\Http\Controllers\TicketController;
use App\Models\Ticket;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

$findTicket = fn (string $pattern) => Ticket::with(['variants' => fn ($q) => $q->where('is_active', true)])
    ->where('name', 'like', "%{$pattern}%")
    ->first(['id', 'name', 'price', 'quota']);

Route::get('/wisata/puncak-manud', fn () => Inertia::render('wisata/puncak-manud', [
    'ticket' => $findTicket('Puncak Manud'),
]))->name('wisata.puncak-manud');
Route::get('/wisata/kebun-stroberi', fn () => Inertia::render('wisata/kebun-stroberi', [
    'ticket' => $findTicket('Kebun Stroberi'),
]))->name('wisata.kebun-stroberi');
Route::get('/wisata/air-terjun-cahaya', fn () => Inertia::render('wisata/air-terjun-cahaya', [
    'ticket' => $findTicket('Air Terjun'),
]))->name('wisata.air-terjun-cahaya');

Route::get('/atraksi/konser-kecapi-suling', fn () => Inertia::render('atraksi/konser-kecapi-suling', [
    'ticket' => $findTicket('Kecapi Suling'),
]))->name('atraksi.konser-kecapi-suling');
Route::get('/atraksi/drama-sangkuriang', fn () => Inertia::render('atraksi/drama-sangkuriang', [
    'ticket' => $findTicket('Sangkuriang'),
]))->name('atraksi.drama-sangkuriang');
Route::get('/atraksi/petik-strawberry', fn () => Inertia::render('atraksi/petik-strawberry', [
    'ticket' => $findTicket('Petik Strawberry'),
]))->name('atraksi.petik-strawberry');
Route::get('/atraksi/rafting-cimanud', fn () => Inertia::render('atraksi/rafting-cimanud', [
    'ticket' => $findTicket('Rafting'),
]))->name('atraksi.rafting-cimanud');

Route::get('/pemandu-wisata', fn () => Inertia::render('pemandu-wisata'))->name('pemandu-wisata');

Route::get('/akomodasi-transportasi', function () {
    return Inertia::render('akomodasi-transportasi', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('akomodasi-transportasi');

Route::get('/kontak', function () {
    return Inertia::render('kontak', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('kontak');

Route::get('/faq', fn () => Inertia::render('faq'))->name('faq');

Route::get('/tiket', [TicketController::class, 'index'])->name('tickets.index');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/keranjang', [CartController::class, 'index'])->name('cart.index');
    Route::post('/keranjang', [CartController::class, 'store'])->name('cart.store');
    Route::patch('/keranjang/{variantId}', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/keranjang/{variantId}', [CartController::class, 'destroy'])->name('cart.destroy');

    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout.store');

    Route::get('/pesanan', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/pesanan/{order}', [OrderController::class, 'show'])->name('orders.show');
    Route::get('/pesanan/{order}/invoice', [OrderController::class, 'invoice'])->name('orders.invoice');
});

Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('admin.users');
    Route::patch('/users/{user}', [UserController::class, 'update'])->name('admin.users.update');
    Route::post('/users/{user}/verify', [UserController::class, 'verify'])->name('admin.users.verify');

    Route::get('/broadcast', [BroadcastController::class, 'index'])->name('admin.broadcast.index');
    Route::post('/broadcast', [BroadcastController::class, 'send'])->name('admin.broadcast.send');
});

Route::middleware(['auth', 'verified', 'role:admin,staff'])->prefix('staff')->group(function () {
    Route::get('/dashboard', [StaffDashboardController::class, 'index'])->name('staff.dashboard');
    Route::patch('/transactions/{transaction}', [StaffDashboardController::class, 'updateTransaction'])->name('staff.transactions.update');
});

require __DIR__.'/settings.php';
