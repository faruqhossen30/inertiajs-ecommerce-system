<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CartpageController extends Controller
{
    public function cartPage()
    {
        return Inertia::render('CartPage');
    }
}
