<?php

use App\Http\Controllers\Admin\Attributes\AttributeController;
use App\Http\Controllers\Admin\Attributes\AttributeValueController;
use App\Http\Controllers\Admin\Attributes\BrandController;
use App\Http\Controllers\Admin\Attributes\CategoryController;
use App\Http\Controllers\Admin\Attributes\ColorController;
use App\Http\Controllers\Admin\Attributes\SubCategoryController;
use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;


use App\Http\Controllers\Admin\Blog\BlogcategoryController;
use App\Http\Controllers\Admin\Blog\BlogController;
use App\Http\Controllers\Admin\PackageController;

use App\Http\Controllers\Admin\Post\PostController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\ToolController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('admin/login', [AuthenticatedSessionController::class, 'create'])->name('adminlogin');
Route::post('admin/login', [AuthenticatedSessionController::class, 'store']);

Route::group(['prefix' => 'admin', 'middleware' => ['auth','admin']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    Route::resource('posts', PostController::class);
    Route::resource('blog', BlogController::class);

    Route::resource('category', CategoryController::class);
    Route::resource('subcategory', SubCategoryController::class);
    Route::resource('colors', ColorController::class);
    Route::resource('brands', BrandController::class);
    Route::resource('product', ProductController::class);
    // Attribute
    Route::resource('attributes', AttributeController::class);
    Route::get('attribute-value/{id}', [AttributeValueController::class, 'create'])->name('attributevalue.create');
    Route::post('attribute-value/{id}', [AttributevalueController::class, 'store'])->name('attributevalue.store');
    Route::post('attribute-value/{id}/update', [AttributevalueController::class, 'update'])->name('attributevalue.update');
    Route::post('attribute-value/{id}/destroy', [AttributevalueController::class, 'destroy'])->name('attributevalue.destroy');

    // Route::resource('tools', ToolController::class);

    // Route::resource('skill', SkillController::class);
    // Route::post('skill/{id}', [SkillController::class, 'update'])->name('skillupdate');

    // Route::resource('portfolio', PortfolioController::class);
    // Route::post('portfolio/{id}', [PortfolioController::class, 'update'])->name('portfolioupdate');

    Route::resource('blogcategory', BlogcategoryController::class);
    Route::resource('package', PackageController::class);
    Route::get('user/list', [UserController::class,'index'])->name('users');
    Route::get('user/show/{id}', [UserController::class,'show'])->name('user.show');
    Route::delete('user/delete/{id}', [UserController::class,'destroy'])->name('user.destroy');
});
