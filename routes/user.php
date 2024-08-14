<?php

use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\PostController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['prefix' => 'user', 'middleware' => ['auth']], function () {
    Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('user.dashboard');
    Route::get('posts', [PostController::class, 'index'])->name('user.post.index');
    Route::get('post/create', [PostController::class, 'create'])->name('user.post.create');
    Route::post('post/create', [PostController::class, 'store'])->name('user.post.store');

    Route::get('profile', [ProfileController::class, 'profile'])->name('user.profile');
    Route::get('profile/edit', [ProfileController::class, 'profileEdit'])->name('user.profile.edit');
    Route::post('profile/edit', [ProfileController::class, 'profileUpdate'])->name('user.profile.update');
});
