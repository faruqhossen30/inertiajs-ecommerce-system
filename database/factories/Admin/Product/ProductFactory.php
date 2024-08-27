<?php

namespace Database\Factories\Admin\Product;

use App\Models\Admin\Product\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin\Product\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence();
        $number = rand(1,9);
        return [
            'title'             => $title,
            'slug'              => Str::slug($title),
            'bn_title'          => $title,
            'thumbnail'         => "products/{$number}.png",
            'description'       => fake()->text(),
            'short_description' => fake()->text(),
            'price'             => rand(500,1000),
            'quantity'          => rand(500,1000),
            'alert_quantity'    => rand(500,1000),
            'brand_id'          => rand(1,7),
            'user_id'           => 1,
            'status'            => true
        ];
    }
}
