<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\Product;
use App\Models\Admin\Product\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
    public function homePage()
    {

        // $products = Product::take(10)->get();

        // return $products;

        $categories = Category::get();
        $sliders = Slider::get();
        $products = Product::take(12)->get();
        return Inertia::render('HomePage', ['categories' => $categories,'sliders' => $sliders,'products'=>$products]);
    }
}
