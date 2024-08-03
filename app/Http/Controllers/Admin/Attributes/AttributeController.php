<?php

namespace App\Http\Controllers\Admin\Attributes;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product\Attribute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $attributes = Attribute::paginate();
        // return $attributes;
        return Inertia::render('Admin/Product/Attribute/Index', ['attributes' => $attributes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Product/Attribute/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        Attribute::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'author_id' => Auth::user()->id,
        ]);
        return redirect()->route('attribute.index');
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
        $attribute = Attribute::firstWhere('id', $id);
        return Inertia::render('Admin/Product/Attribute/Edit', ['attribute' => $attribute]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required'
        ]);

        Attribute::firstWhere('id', $id)->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);
        return to_route('attribute.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Attribute::where('id', $id)->delete();
        return to_route('attribute.index');
    }
}
