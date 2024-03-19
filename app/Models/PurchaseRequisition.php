<?php

namespace App\Models;

use App\Enums\Status;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PurchaseRequisition extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'date',
        'status',
        'user_id'
    ];

    //cast status to status enums
    protected $casts = [
        'status' => 'enum'
    ];

    protected $dates = ['date'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(PurchaseRequisitionItem::class, 'pr_id', 'id');
    }

    public function purchaseOrderItems(): HasMany
    {
        return $this->hasMany(PurchaseOrderItem::class, 'pr_id', 'id');
    }

    public function scopeApproved($query)
    {
        return $query->where('status', Status::Approved);
    }

    public function scopePending($query)
    {
        return $query->where('status', Status::Pending);
    }

    public function scopeRejected($query)
    {
        return $query->where('status', Status::Rejected);
    }

    public function scopeCancelled($query)
    {
        return $query->where('status', Status::Cancelled);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', Status::Completed);
    }

    public function scopeByUser($query, $user)
    {
        return $query->where('user_id', $user->id);
    }

    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }
}
