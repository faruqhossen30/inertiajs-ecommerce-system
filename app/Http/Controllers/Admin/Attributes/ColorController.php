<?php

namespace App\Http\Controllers\Admin\Attributes;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product\Color;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $colors = Color::latest()->paginate(10);
        return Inertia::render('Admin/Color/Index', ['colors' => $colors]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Color/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //  return $request->all();
        $request->validate(
            ['name' => 'required', 'code' => 'required']
        );

        $data = [
            'name'        => $request->name,
            'description' => $request->description,
            'code'        => $request->code,
            'author_id'   => Auth::user()->id,
            'status'      => $request->status,
        ];

        Color::create($data);

        return to_route('colors.index');
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
        $color = Color::where('id', $id)->first();
        // return $colors;
        return Inertia::render('Admin/Color/Edit', ['color'=>$color]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(
            ['name' => 'required', 'code' => 'required']
        );

        Color::where('id', $id)->update([
            'name' => $request->name,
            'description' => $request->description,
            'code' => $request->code,
            'status' => $request->status,
        ]);
        return to_route('colors.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Color::where('id', $id)->delete();
        return redirect()->route('colors.index');
    }
}
