<?php

namespace App\Http\Controllers\Admin\Attributes;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subcategories = SubCategory::paginate(10);
        // return $categories;
        return Inertia::render('Admin/Subcategory/Index', ['subcategories' => $subcategories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Subcategory/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = [
            'name'        => $request->name,
            'slug'        => Str::slug($request->name),
            'category_id' => $request->category_id,
            'author_id'   => 1,
        ];

        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('subcategory');
            $data['thumbnail'] = $file_name;
        }

        SubCategory::create($data);

        return to_route('subcategory.index');
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
        $subcategory = SubCategory::where('id', $id)->first();
        $categories = Category::get();
        return Inertia::render('Admin/Subcategory/Edit', ['categories' => $categories, 'subcategory' => $subcategory]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        // return $request->all();
        $data = [
            'name'        => $request->name,
            'slug'        => Str::slug($request->name),
            'category_id' => $request->category_id,
        ];
        if ($request->file('thumbnail')) {
        }

        SubCategory::firstwhere('id', $id)->update($data);
        return to_route('subcategory.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Subcategory::where('id', $id)->delete();
        return to_route('subcategory.index');
    }
}
