<?php

namespace App\Models\Admin\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    use HasFactory;
    protected $fillable = ['name','slug','bn_name', 'user_id', 'status'];

    public function values()
    {
        return $this->hasMany(AttributeValue::class);
    }

}
