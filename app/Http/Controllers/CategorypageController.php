<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorypageController extends Controller
{
    public function categoryPage()
    {
        $categories = Category::with('subcategories')->get();
        // return $categories;
        return Inertia::render('CategoryPage', ['categories' => $categories]);
    }
}
