<?php

namespace Database\Seeders;

use App\Models\Admin\GalleryCategory;
use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\SubCategory;
use Illuminate\Database\Seeder;


use Illuminate\Support\Str;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = array(
            array('id' => '1','name' => 'Men Jeans','slug' => 'men-jeans','thumbnail' => '71e34a0b-292f-47d4-9fdf-e40687442452.webp','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:50:58','updated_at' => '2024-03-25 10:50:58'),
            array('id' => '2','name' => 'Shoes','slug' => 'shoes','thumbnail' => 'fa9e5535-c67e-46d4-be24-173453bb8376.jpg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:51:28','updated_at' => '2024-03-25 10:51:28'),
            array('id' => '3','name' => 'Formal Shirt','slug' => 'formal-shirt','thumbnail' => '41b10ab4-2c60-4eab-b009-a9973982e07f.jpg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:51:47','updated_at' => '2024-03-25 10:51:47'),
            array('id' => '4','name' => 'Polo-Shirt','slug' => 'polo-shirt','thumbnail' => '8afd7f72-3342-496d-9473-bf0987262708.jpeg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:52:10','updated_at' => '2024-03-25 10:52:10'),
            array('id' => '5','name' => 'Windbreaker','slug' => 'windbreaker','thumbnail' => 'fc257965-2e2c-4951-b0f9-7abd7f282f3b.jpeg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:52:28','updated_at' => '2024-03-25 10:52:28'),
            array('id' => '6','name' => 'Men Panjabi','slug' => 'men-panjabi','thumbnail' => '516eed26-6701-4ad0-b344-e827565a4c29.jpeg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:52:48','updated_at' => '2024-03-25 10:52:48'),
            array('id' => '7','name' => 'Jewelry','slug' => 'jewelry','thumbnail' => 'aca6fe07-2b15-4183-a517-7de8bd781b41.jpg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:53:05','updated_at' => '2024-03-25 10:53:05'),
            array('id' => '8','name' => 'Men T-shirt','slug' => 'men-t-shirt','thumbnail' => '4c064980-adda-4e0a-8a85-50c1c963a652.PNG','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:53:23','updated_at' => '2024-03-25 10:53:23'),
            array('id' => '9','name' => 'Shree','slug' => 'shree','thumbnail' => 'c554bdc3-430d-410a-a1bd-51bdbe5a1021.jpg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:53:40','updated_at' => '2024-03-25 10:53:40'),
            array('id' => '10','name' => 'Kids Zone','slug' => 'kids-zone','thumbnail' => '3ffe3b72-1c9a-45ee-a6ad-df6f6d62626d.jpeg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:53:59','updated_at' => '2024-03-25 10:53:59'),
            array('id' => '11','name' => 'Women\'s Gown','slug' => 'womens-gown','thumbnail' => '992df1bd-0300-4344-866f-087a2110f221.jpg','author_id' => '1','status' => '1','created_at' => '2024-03-25 10:54:21','updated_at' => '2024-03-25 10:54:21')
          );

          Category::insert($categories);


    }
}
