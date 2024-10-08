<?php

namespace App\Http\Controllers\Admin\Attributes;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands = Brand::paginate(10);
        // return $brands;
        return Inertia::render('Admin/Brand/Index', ['brands' => $brands]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Brand/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'bn_name' => $request->bn_name,
            'user_id' => Auth::user()->id,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('brands');
            $data['thumbnail'] = $file_name;
        }

        Brand::create($data);

        return to_route('brands.index');
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
        $brand = Brand::where('id', $id)->first();
        return Inertia::render('Admin/Brand/Edit', ['brand' => $brand]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'bn_name' => $request->bn_name,
        ];

        $brand = Brand::firstwhere('id', $id);
        if ($request->file('thumbnail')) {
            if ($brand->thumbnail != null && Storage::exists($brand->thumbnail)) {
                Storage::delete($brand->thumbnail);
            }

            $file_name = $request->file('thumbnail')->store('brand');
            $data['thumbnail'] = $file_name;
        }

        Brand::firstwhere('id', $id)->update($data);

        return to_route('brands.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
