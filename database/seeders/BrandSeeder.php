<?php

namespace Database\Seeders;

use App\Models\Admin\Product\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = array(
            array('id' => '1', 'name' => 'Yellow', 'slug' => 'yellow', 'user_id' => '1', 'thumbnail' => null, 'status' => '1', 'created_at' => '2024-03-25 11:00:25', 'updated_at' => '2024-03-25 11:00:25'),
            array('id' => '2', 'name' => 'Easy', 'slug' => 'easy', 'user_id' => '1', 'thumbnail' => null, 'status' => '1', 'created_at' => '2024-03-25 11:00:42', 'updated_at' => '2024-03-25 11:00:42'),
            array('id' => '3', 'name' => 'Lerve', 'slug' => 'lerve', 'user_id' => '1', 'thumbnail' => null, 'status' => '1', 'created_at' => '2024-03-25 11:01:08', 'updated_at' => '2024-03-25 11:01:08'),
            array('id' => '4', 'name' => 'Twelve', 'slug' => 'twelve', 'user_id' => '1', 'thumbnail' => null, 'status' => '1', 'created_at' => '2024-03-25 11:01:25', 'updated_at' => '2024-03-25 11:01:25'),
            array('id' => '5', 'name' => 'Aarong', 'slug' => 'aarong', 'user_id' => '1', 'thumbnail' => null, 'status' => '1', 'created_at' => '2024-03-25 11:01:49', 'updated_at' => '2024-03-25 11:01:49'),
            array('id' => '6', 'name' => '10Q', 'slug' => '10q', 'user_id' => '1', 'thumbnail' => null, 'status' => '1', 'created_at' => '2024-03-25 11:02:08', 'updated_at' => '2024-03-25 11:02:08'),
            array('id' => '7', 'name' => 'Nirjon', 'slug' => 'nirjon', 'user_id' => '1', 'thumbnail' => null, 'status' => '1', 'created_at' => '2024-03-25 11:02:35', 'updated_at' => '2024-03-25 11:02:35')
        );
        Brand::insert($brands);
    }
}
