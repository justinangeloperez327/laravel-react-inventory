<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $colors = [
            ['name' => 'Red', 'hex' => '#FF0000'],
            ['name' => 'Green', 'hex' => '#00FF00'],
            ['name' => 'Blue', 'hex' => '#0000FF'],
            ['name' => 'Yellow', 'hex' => '#FFFF00'],
            ['name' => 'Magenta', 'hex' => '#FF00FF'],
            ['name' => 'Cyan', 'hex' => '#00FFFF'],
            ['name' => 'Black', 'hex' => '#000000'],
            ['name' => 'White', 'hex' => '#FFFFFF'],
        ];

        foreach ($colors as $color) {
            \App\Models\Color::create($color);
        }
    }
}
