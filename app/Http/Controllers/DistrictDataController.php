<?php

namespace App\Http\Controllers;

use App\Models\Location\District;
use Illuminate\Http\Request;

class DistrictDataController extends Controller
{
    public function allDistrict(Request $request)
    {
        try {
            $districts = District::orderBy('name', 'asc')->get();
            return response()->json($districts);
        } catch (\Throwable $th) {
            dd($th);
        }
    }
}
