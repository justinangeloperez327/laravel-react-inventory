<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePurchaseRequisitionItemRequest extends FormRequest
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
            'item_id' => ['required', 'exists:items,id'],
            'quantity' => ['required', 'numeric'],
            'unit_price' => ['required', 'numeric'],
            'total_price' => ['required', 'numeric'],
            'remarks' => ['nullable', 'string', 'max:255'],
        ];
    }
}
