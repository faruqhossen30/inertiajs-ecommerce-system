<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
    public function homePage()
    {
        $categories = Category::get();
        return Inertia::render('HomePage', ['categories' => $categories]);
    }
}
