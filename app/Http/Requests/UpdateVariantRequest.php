<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVariantRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_id' => ['required', 'exists:products,id'],
            'color_id' => ['required', 'exists:colors,id'],
            'size_id' => ['required', 'exists:sizes,id'],
            'price' => ['required', 'numeric'],
            'stock' => ['required', 'numeric'],
        ];
    }
}
