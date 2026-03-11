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

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
