<?php

namespace Database\Seeders;

use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\Product;
use App\Models\Admin\Product\SubCategory;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            AdminSeeder::class,
            UserSeeder::class,
            // CategorySeeder::class,
            BrandSeeder::class,
            // AttributeSeeder::class,

            // DivisionSeeder::class,
            // DistrictSeeder::class,
            // UpazilaSeeder::class,
            // UnionSeeder::class,
        ]);
        Category::factory(5)->has(Product::factory(10))
        ->create();

        // SubCategory::factory(5)->has(Category::factory(3))->create();

        // Product::factory(5)->has(SubCategory::factory(3))->create();
    }
}
