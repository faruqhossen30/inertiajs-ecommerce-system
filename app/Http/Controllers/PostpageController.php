<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostpageController extends Controller
{
    function index(): Response
    {
        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        $posts = Post::query();

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $portfolios = $posts->where('title', 'like', '%' .$search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $portfolios = $posts->orderBy('created_at', $orderby);
        }

        $posts = $posts->paginate($show ?? 10)->appends($_GET);

        return Inertia::render('PostPage', ['posts' => $posts,'request'=>$_GET]);
    }
    function singlePost(string $slug): Response
    {
        $post = Post::firstWhere('slug', $slug);
        return Inertia::render('SinglePost', ['post' => $post]);
    }
}
