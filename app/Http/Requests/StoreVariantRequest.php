<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVariantRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:255'],
            'price' => ['required', 'numeric'],
            'cost_price' => ['required', 'numeric'],
            'quantity' => ['required', 'numeric'],
            'sku' => ['required', 'string', 'max:255'],
            'barcode' => ['required', 'string', 'max:255'],
            'weight' => ['required', 'numeric'],
            'length' => ['required', 'numeric'],
            'width' => ['required', 'numeric'],
            'height' => ['required', 'numeric'],
            'category_id' => ['required', 'numeric'],
            'color_id' => ['required', 'numeric'],
            'size_id' => ['required', 'numeric'],
        ];
    }
}
