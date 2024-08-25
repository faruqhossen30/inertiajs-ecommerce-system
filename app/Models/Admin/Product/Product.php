<?php

namespace App\Models\Admin\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'slug',
        'bn_title',
        'category_id',
        'subcategory_id',
        'description',
        'short_description',
        'price',
        'quantity',
        'alert_quantity',
        'discount_type',
        'discount',
        'sku_code',
        'status',
        'brand_id',
        'slider',
        'user_id',
        'thumbnail',
        'img_1',
        'img_2',
        'img_3',
        'img_4',
        'meta_title',
        'meta_description',
        'meta_keyword'
    ];

    public function getItemAttribute($value)
    {
        return $this->value;
    }

    public function subcategory()
    {
        return $this->belongsTo(subcategory::class, 'categories');
    }


}
