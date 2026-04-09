<?php

namespace App\Models;

use App\Enum\RoleEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    protected $fillable = [
        'level',
        'label',
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    protected function casts()
    {
        return [
            'label' => RoleEnum::class,
        ];
    }
}
