<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PurchaseRequisitionItem>
 */
class PurchaseRequisitionItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quantity' => $this->faker->randomNumber(2),
            'unit_price' => $this->faker->randomFloat(2, 0, 100),
            'description' => $this->faker->sentence,
        ];
    }
}
