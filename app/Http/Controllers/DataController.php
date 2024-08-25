<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\SubCategory;
use App\Models\Feature;
use App\Models\Location\District;
use App\Models\Location\Division;
use App\Models\Location\Union;
use App\Models\Location\Upazila;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function categories()
    {
        $categories = Category::orderBy('name', 'asc')->get();

        return response()->json($categories);
    }

    public function subcategories(Request $request)
    {
        $subcategories =  SubCategory::query();
        if ($request->category_id) {
            $subcategories = $subcategories->where('category_id', $request->category_id);
        }

        $subcategories = $subcategories->get();

        return response()->json($subcategories);
    }

    public function districts(Request $request)
    {
        try {
            $districts = District::query();

            if ($request->division_id) {
                // dd($request->division_id);
                $division_id = $request->division_id;

                $districts = $districts->whereHas('division', function ($query) use ($division_id) {
                    return $query->where('division_id', $division_id);
                });
            }

            if (isset($_GET['keyword']) && $_GET['keyword']) {
                $keyword = trim($_GET['keyword']);
                $districts = $districts->where('name', 'like', '%' . $keyword . '%');
            }

            $districts = $districts->orderBy('name', 'asc')
                ->take(10)->get();

            return response()->json($districts);
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public function divisions()
    {

        $keyword = null;
        if (isset($_GET['keyword']) && $_GET['keyword']) {
            $keyword = trim($_GET['keyword']);
        }


        $divisions = Division::when($keyword, function ($query) use ($keyword) {
            return $query->where('name', 'like', '%' . $keyword . '%');
        })->orderBy('name', 'asc')
            ->take(10)->get();
        return response()->json($divisions);
    }

    public function upazilas(Request $request)
    {
        try {
            $upazilas = Upazila::query();

            if ($request->district_id) {
                $district_id = $request->district_id;
                $upazilas = $upazilas->whereHas('district', function ($query) use ($district_id) {
                    return $query->where('district_id', $district_id);
                });
            }

            if (isset($_GET['keyword']) && $_GET['keyword']) {
                $keyword = trim($_GET['keyword']);
                $upazilas = $upazilas->where('name', 'like', '%' . $keyword . '%');
            }

            $upazilas = $upazilas->orderBy('id', 'asc')
                ->take(10)->get();

            return response()->json($upazilas);
        } catch (\Throwable $th) {
            dd($th);
        }
    }


    public function unions(Request $request)
    {
        try {
            $unions = Union::query();

            if ($request->upazila_id) {
                $upazila_id = $request->upazila_id;
                $unions = $unions->whereHas('upazila', function ($query) use ($upazila_id) {
                    return $query->where('upazila_id', $upazila_id);
                });
            }

            if (isset($_GET['keyword']) && $_GET['keyword']) {
                $keyword = trim($_GET['keyword']);
                $unions = $unions->where('name', 'like', '%' . $keyword . '%');
            }

            $unions = $unions->orderBy('id', 'asc')
                ->take(10)->get();

            return response()->json($unions);
        } catch (\Throwable $th) {
            dd($th);
        }
    }


    public function features(Request $request)
    {

        try {
            $features = Feature::query();
            if (isset($_GET['categoryIds']) && $_GET['categoryIds']) {
                $categoryIds = $_GET['categoryIds'];
                $features = $features->whereIn('category_id', $categoryIds);
            }

            if (isset($_GET['keyword']) && $_GET['keyword']) {
                $keyword = trim($_GET['keyword']);
                $features = $features->where('name', 'like', '%' . $keyword . '%');
            }

            $features = $features->orderBy('id', 'asc')
                ->take(10)->get();

            return response()->json($features);
        } catch (\Throwable $th) {
            dd($th);
        }
    }
}
