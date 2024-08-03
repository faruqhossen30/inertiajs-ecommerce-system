<?php

namespace App\Models\Admin\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [

        'category_id',
        'subcategory_id',
        'title',
        'slug',
        'description',
        'short_description',
        'price',
        'quantity',
        'alert_quantity',
        'discount_type',
        'discount',
        'quantity',
        'slider',
        'sku_code',
        'status',
        'thumbnail',
        'brand_id',
        'author_id',
        'meta_title',
        'meta_description',
        'meta_keyword',

    ];


    public function getItemAttribute($value)
    {
        return $this->value;
    }




}
