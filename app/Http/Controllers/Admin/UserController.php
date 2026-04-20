<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::orderBy('name')->get(['id', 'name', 'email', 'role', 'email_verified_at', 'created_at']);

        return Inertia::render('admin/users', [
            'users' => $users,
        ]);
    }

    public function update(Request $request, User $user): RedirectResponse
    {
        $request->validate([
            'role' => 'required|in:admin,staff,user',
        ]);

        if ($user->id === $request->user()->id) {
            return back()->withErrors(['role' => 'Anda tidak dapat mengubah role sendiri.']);
        }

        $user->update(['role' => $request->role]);

        return back()->with('success', "Role {$user->name} berhasil diubah menjadi {$request->role}.");
    }

    public function verify(User $user): RedirectResponse
    {
        if ($user->email_verified_at !== null) {
            return back()->with('success', "Email {$user->name} sudah terverifikasi sebelumnya.");
        }

        $user->forceFill(['email_verified_at' => now()])->save();

        return back()->with('success', "Email {$user->name} berhasil diverifikasi.");
    }
}
