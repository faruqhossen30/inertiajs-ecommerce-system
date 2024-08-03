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
            array('id' => '1','name' => 'Yellow','slug' => 'yellow','author_id' => '1','thumbnail' => '6d0e98c3-b862-4c50-b57e-d04b2f931ca0.png','status' => '1','created_at' => '2024-03-25 11:00:25','updated_at' => '2024-03-25 11:00:25'),
            array('id' => '2','name' => 'Easy','slug' => 'easy','author_id' => '1','thumbnail' => '1360a1d0-0275-439d-9bfd-b3881fd7d4a0.jpg','status' => '1','created_at' => '2024-03-25 11:00:42','updated_at' => '2024-03-25 11:00:42'),
            array('id' => '3','name' => 'Lerve','slug' => 'lerve','author_id' => '1','thumbnail' => 'fa3969f8-eb76-4c97-8325-0e0c81afb406.jpg','status' => '1','created_at' => '2024-03-25 11:01:08','updated_at' => '2024-03-25 11:01:08'),
            array('id' => '4','name' => 'Twelve','slug' => 'twelve','author_id' => '1','thumbnail' => '1ba8e69a-e2d5-4333-a219-2129d8d9bdef.png','status' => '1','created_at' => '2024-03-25 11:01:25','updated_at' => '2024-03-25 11:01:25'),
            array('id' => '5','name' => 'Aarong','slug' => 'aarong','author_id' => '1','thumbnail' => '6d072295-cfd0-46d1-b2f8-990da974751f.webp','status' => '1','created_at' => '2024-03-25 11:01:49','updated_at' => '2024-03-25 11:01:49'),
            array('id' => '6','name' => '10Q','slug' => '10q','author_id' => '1','thumbnail' => '92c5f9bb-49d4-4065-9126-013017b311eb.jpg','status' => '1','created_at' => '2024-03-25 11:02:08','updated_at' => '2024-03-25 11:02:08'),
            array('id' => '7','name' => 'Nirjon','slug' => 'nirjon','author_id' => '1','thumbnail' => 'dcf8479a-0702-463c-9645-011baf96dbf8.jpg','status' => '1','created_at' => '2024-03-25 11:02:35','updated_at' => '2024-03-25 11:02:35')
          );
          Brand::insert($brands);
    }
}
