<?php

namespace App\Models\Location;

use Illuminate\Database\Eloquent\Model;

class Union extends Model
{
    protected $guarded = [];

    public function upazila()
    {
        return $this->belongsTo(Upazila::class);
    }
}
