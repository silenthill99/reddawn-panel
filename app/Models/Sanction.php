<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sanction extends Model
{
    use HasFactory;

    protected $fillable = [
        'pseudo',
        'sanction_type',
        'reason',
        'duration',
    ];

    public function emittedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'emitted_by');
    }
}
