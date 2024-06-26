<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Size extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'type'];

    public $timestamps = false;

    public function variants(): HasMany
    {
        return $this->hasMany(Variant::class);
    }
}
