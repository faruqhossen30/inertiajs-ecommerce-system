<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class ProfileController extends Controller
{
    function profile(): Response
    {
        return Inertia::render('User/ProfilePage');
    }
    function profileEdit(): Response
    {
        $user = User::firstWhere('id', Auth::user()->id);
        return Inertia::render('User/ProfilePageEdit', ['user' => $user]);
    }


    function profileUpdate(Request $request)
    {
        $request->validate([
            'name'=> 'required'
        ]);

        $data=[
            'name'=> $request->name,
            'mobile'=> $request->mobile,
            'address'=> $request->address,
            'bio'=> $request->bio,
        ];

        if ($request->file('avatar')) {
            $imagethumbnail = $request->file('avatar');
            $extension = $imagethumbnail->getClientOriginalExtension();
            $thumbnailname = Str::uuid() . '.' . $extension;

            $manager = new ImageManager(Driver::class);
            $img = $manager->read($request->file('avatar'));
            $img = $img->scale(200);

            $path_name = '/uploads/avatar/'.$thumbnailname;

            $some = $img->save(public_path($path_name));

            $data['avatar'] = $path_name;
        }

        User::firstWhere('id', Auth::user()->id)->update($data);

        return to_route('user.profile');



    }
}
