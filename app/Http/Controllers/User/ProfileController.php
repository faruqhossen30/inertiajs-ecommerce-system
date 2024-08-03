<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    function profile(): Response
    {
        return Inertia::render('User/ProfilePage');
    }
    function profileEdit(): Response
    {
        return Inertia::render('User/ProfilePage');
    }
}
