<?php

namespace App\Http\Controllers\Admin\Attributes;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product\Category;
use App\Models\Admin\Product\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;


class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sliders = Slider::paginate(10);
        // return $categories;
        return Inertia::render('Admin/Slider/Index', ['sliders' => $sliders]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Slider/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = [
            'title'       => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('slider');
            $data['thumbnail'] = $file_name;
        }
        Slider::create($data);

        return to_route('sliders.index');
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
        $slider     = Slider::where('id', $id)->first();
        $categories = Category::get();
        return Inertia::render('Admin/Slider/Edit', ['categories' => $categories, 'slider' => $slider]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = [
            'title'       => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
        ];

        $slider = Slider::firstwhere('id', $id);
        if ($request->file('thumbnail')) {
            if ($slider->thumbnail != null && Storage::exists($slider->thumbnail)) {
                Storage::delete($slider->thumbnail);
            }

            $file_name = $request->file('thumbnail')->store('slider');
            $data['thumbnail'] = $file_name;
        }

        Slider::firstwhere('id', $id)->update($data);
        return to_route('sliders.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Slider::where('id', $id)->delete();
        return to_route('sliders.index');
    }
}
