<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function isStaff(): bool
    {
        return $this->role === 'staff';
    }

    public function isUser(): bool
    {
        return $this->role === 'user';
    }

    public function hasRole(string ...$roles): bool
    {
        return in_array($this->role, $roles);
    }

    public function orders(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Order::class);
    }

    public function transactions(): \Illuminate\Database\Eloquent\Relations\HasManyThrough
    {
        return $this->hasManyThrough(Transaction::class, Order::class);
    }

    /**
     * Return customer segment A..H from the Customer Segment matrix
     * (gender × age bucket). Falls back to 'H' when data is missing.
     *
     * Columns: 17–28 (Z), 28–35 (Y), 35–50 (X), 50–63 (boomer).
     * Rows: Laki-laki (A,C,E,G), Perempuan (B,D,F,H).
     */
    public function segment(): string
    {
        if (! $this->date_of_birth || ! $this->gender) {
            return 'H';
        }

        $age = $this->date_of_birth->age;

        $column = match (true) {
            $age >= 17 && $age < 28 => 0,
            $age >= 28 && $age < 35 => 1,
            $age >= 35 && $age < 50 => 2,
            $age >= 50 && $age < 63 => 3,
            default => null,
        };

        if ($column === null) {
            return 'H';
        }

        $row = $this->gender === 'male' ? 0 : 1;

        $matrix = [
            ['A', 'C', 'E', 'G'],
            ['B', 'D', 'F', 'H'],
        ];

        return $matrix[$row][$column];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'date_of_birth',
        'gender',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'date_of_birth' => 'date',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }
}
