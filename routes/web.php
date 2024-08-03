<?php

use App\Http\Controllers\Auth\GoogleauthController;
use App\Http\Controllers\BlogpageController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\PortfolioPageController;
use App\Http\Controllers\PostpageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|`
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('homepage');

Route::get('posts', [PostpageController::class, 'index'])->name('postpage');
Route::get('post/{slug}', [PostpageController::class, 'singlePost'])->name('single.post');

Route::get('conatact', [ContactController::class, 'index'])->name('contact');
Route::get('blogs', [BlogpageController::class, 'index'])->name('blogpage');
Route::get('blog/{slug}', [BlogpageController::class, 'singleBlog'])->name('single.blog');
Route::get('portfolios', [PortfolioPageController::class, 'index'])->name('portfoliopage');
Route::get('portfolio/{slug}', [PortfolioPageController::class, 'singlePortfolio'])->name('single.portfolio');


Route::get('auth/google', [GoogleauthController::class, 'redirect'])->name('google-auth');
Route::get('auth/google/call-back', [GoogleauthController::class, 'callbackGoogle']);

Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
});

Route::prefix('data')->group(function () {
    Route::get('categories', [DataController::class, 'categories'])->name('data.categories');
    Route::get('divisions', [DataController::class, 'divisions'])->name('data.divisions');
    Route::get('districts', [DataController::class, 'districts'])->name('data.districts');
});

require __DIR__.'/auth.php';
