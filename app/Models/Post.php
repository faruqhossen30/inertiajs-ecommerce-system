<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'description',
        'price',
        'thumbnail',
        'user_id',
        'division_id',
        'distric_id',
        'upazilla_id',
        'union_id',
        'address',
        'location',
        'latitude',
        'longitude',
        'google_map',
    ];
}
