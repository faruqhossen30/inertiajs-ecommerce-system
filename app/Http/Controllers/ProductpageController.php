<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product\Brand;
use App\Models\Admin\Product\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductpageController extends Controller
{
    public function productPage()
    {

        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        $products = Product::query();

        if (isset($_GET['district']) && $_GET['district']) {
            $district = $_GET['district'];
            $products = $products->where('district_id', $district);
        }

        if (isset($_GET['cat']) && $_GET['cat']) {
            $cat = $_GET['cat'];
            $products = $products->whereIn('category_id', $cat);
        }
        if (isset($_GET['brand']) && $_GET['brand']) {
            $brands = $_GET['brand'];
            $products = $products->whereIn('brand_id', $brands);
        }

        if (isset($_GET['feature']) && $_GET['feature']) {
            $feature = $_GET['feature'];
            $products = $products->whereHas('features', function ($query) use ($feature) {
                return $query->whereIn('feature_id', $feature);
            });
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $products = $products->where('title', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $products = $products->orderBy('created_at', $orderby);
        }


        if (isset($_GET['sort']) && $_GET['sort']) {
            $sort = $_GET['sort'];
            $products = $products->orderBy('price', $sort);
        }

        $products = $products->latest()->paginate($show ?? 10)->appends($_GET);
        $brands = Brand::get();

        // return $brands;

        return Inertia::render('ProductPage', ['products' => $products, 'brands'=>$brands, 'request' => $_GET]);

        // return Inertia::render('ProductPage');
    }

    public function singleProduct(){
        return Inertia::render('SingleProduct');
    }
}
