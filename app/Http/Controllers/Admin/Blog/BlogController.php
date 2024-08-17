<?php

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product\Category;
use App\Models\Blog\Blog;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::paginate(10);
        return Inertia::render('Admin/Blog/Index',['blogs'=> $blogs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Blog/Create', ['categories' => $categories]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required'
        ]);

        $data = [
            'title'            => $request->title,
            'slug'             => Str::slug($request->title),
            'category_id'      => $request->category_id,
            'description'      => $request->description,
            'status'           => $request->status,
            'meta_title'       => $request->meta_title,
            'meta_tag'         => $request->meta_tag,
            'meta_description' => $request->meta_description,
            'user_id'          => Auth::user()->id,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('blogs');
            $data['thumbnail'] = $file_name;
        }

        // return $data;

        Blog::create($data);

        return to_route('blog.index');
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
        $blog = Blog::where('id', $id)->first();
        $categories = Category::get();
        return Inertia::render('Admin/Blog/Edit', ['blog'=>$blog,'categories'=>$categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title'=>'required'
        ]);

        $data = [
            'title'            => $request->title,
            'slug'             => Str::slug($request->title),
            'category_id'      => $request->category_id,
            'description'      => $request->description,
            'status'           => $request->status,
            'meta_title'       => $request->meta_title,
            'meta_tag'         => $request->meta_tag,
            'meta_description' => $request->meta_description,
            'user_id'          => Auth::user()->id,
        ];

        Blog::firstwhere('id', $id)->update($data);
        return to_route('blog.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Blog::where('id', $id)->delete();
        return to_route('blog.index');
    }
}
