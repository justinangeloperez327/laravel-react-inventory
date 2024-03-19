<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePurchaseOrderRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'supplier_id' => ['required', 'exists:suppliers,id'],
            'order_date' => ['required', 'date'],
            'delivery_date' => ['required', 'date'],
            'status' => ['required', 'string', 'max:255'],
            'total' => ['required', 'numeric'],
            'discount' => ['required', 'numeric'],
            'grand_total' => ['required', 'numeric'],
            'items' => ['required', 'array'],
            'items.*.product_id' => ['required', 'exists:products,id'],
            'items.*.quantity' => ['required', 'numeric'],
            'items.*.price' => ['required', 'numeric'],
            'items.*.discount' => ['required', 'numeric'],
            'items.*.total' => ['required', 'numeric'],
        ];
    }
}
