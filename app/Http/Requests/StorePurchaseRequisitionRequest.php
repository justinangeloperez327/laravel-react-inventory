<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePurchaseRequisitionRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'description' => ['required', 'string', 'max:255'],
            'date' => ['required', 'date'],
            'expected_date' => ['required', 'date'],
            'status' => ['required', 'string', 'max:255'],

            'items' => ['required', 'array'],
            'items.*.product_id' => ['required', 'exists:products,id'],
            'items.*.quantity' => ['required', 'numeric'],
            'items.*.price' => ['required', 'numeric'],
            'items.*.total' => ['required', 'numeric'],
        ];
    }
}
