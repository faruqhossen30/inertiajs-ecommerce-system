<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\SubCategory;
use App\Models\Location\District;
use App\Models\Location\Division;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function categories()
    {
        try {
            $categories = Category::query();

            if (isset($_GET['keyword']) && $_GET['keyword']) {
                $keyword = trim($_GET['keyword']);
                $categories = $categories->where('name', 'like', '%' . $keyword . '%');
            }

            $categories = $categories->orderBy('name', 'asc')
                ->take(10)->get();

            return response()->json($categories);
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public function subCategories(Request $request)
    {
        try {
            $subcategories = SubCategory::query();

            if ($request->category_id) {
                $category_id = $request->category_id;
                $subcategories = $subcategories->where('category_id', $category_id);
            }

            if (isset($_GET['keyword']) && $_GET['keyword']) {
                $keyword = trim($_GET['keyword']);
                $subcategories = $subcategories->where('name', 'like', '%' . $keyword . '%');
            }

            $subcategories = $subcategories->orderBy('name', 'asc')
                ->take(10)->get();

            return response()->json($subcategories);
        } catch (\Throwable $th) {
            dd($th);
        }
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
}
