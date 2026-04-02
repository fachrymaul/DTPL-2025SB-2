<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/wisata/puncak-manud', fn () => Inertia::render('wisata/puncak-manud'))->name('wisata.puncak-manud');
Route::get('/wisata/kebun-stroberi', fn () => Inertia::render('wisata/kebun-stroberi'))->name('wisata.kebun-stroberi');
Route::get('/wisata/air-terjun-cahaya', fn () => Inertia::render('wisata/air-terjun-cahaya'))->name('wisata.air-terjun-cahaya');

Route::get('/atraksi/konser-kecapi-suling', fn () => Inertia::render('atraksi/konser-kecapi-suling'))->name('atraksi.konser-kecapi-suling');
Route::get('/atraksi/drama-sangkuriang', fn () => Inertia::render('atraksi/drama-sangkuriang'))->name('atraksi.drama-sangkuriang');
Route::get('/atraksi/petik-strawberry', fn () => Inertia::render('atraksi/petik-strawberry'))->name('atraksi.petik-strawberry');
Route::get('/atraksi/rafting-cimanud', fn () => Inertia::render('atraksi/rafting-cimanud'))->name('atraksi.rafting-cimanud');

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

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
