<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product\Brand;
use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\Product;
use App\Models\Admin\Product\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate();
        return Inertia::render('Admin/Product/Index',['products'=> $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories    = Category::get();
        $subcategories = SubCategory::get();
        $brands        = Brand::get();
        return Inertia::render('Admin/Product/Create',['categories'=> $categories,'subcategories'=> $subcategories,'brands'=> $brands]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data = [
            'title'             => $request->title,
            'slug'              => Str ::slug($request->title),
            'category_id'       => $request->category_id,
            'subcategory_id'    => $request->subcategory_id,
            'description'       => $request->description,
            'short_description' => $request->short_description,
            'price'             => $request->price,
            'quantity'          => $request->quantity,
            'alert_quantity'    => $request->alert_quantity,
            'discount_type'     => $request->discount_type,
            'discount'          => $request->discount,
            'slider'            => $request->slider,
            'sku_code'          => $request->sku_code,
            'status'            => $request->status,
            'brand_id'          => $request->brand_id,
            'meta_title'        => $request->meta_title,
            'meta_keyword'      => $request->meta_keyword,
            'meta_description'  => $request->meta_description,
            'user_id'           => Auth::user()->id,
        ];

        Product::create($data);

        return to_route('product.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::where('id', $id)->first();
        return Inertia::render('Admin/Product/Edit', ['product'=>$product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
