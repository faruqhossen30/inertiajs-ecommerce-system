<?php

namespace Database\Factories\Admin\Product;

use App\Models\Admin\Product\SubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin\Product\SubCategory>
 */
class SubCategoryFactory extends Factory
{
    protected $model = SubCategory::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->word();
        $number = rand(1,100);
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'bn_name' => $name,
            'thumbnail' =>  "thumbnail/image-{$number}.jpg",
            'user_id' =>1,
            'status' =>true
        ];
    }
}
