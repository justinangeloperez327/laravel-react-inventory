<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePurchaseRequisitionItemRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'purchase_requisition_id' => ['required', 'exists:purchase_requisitions,id'],
            'product_id' => ['required', 'exists:products,id'],
            'quantity' => ['required', 'numeric'],
            'price' => ['required', 'numeric'],
        ];
    }
}
