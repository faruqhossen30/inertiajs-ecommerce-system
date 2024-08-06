<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductpageController extends Controller
{
    public function productPage()
    {
        return Inertia::render('ProductPage');
    }
}
