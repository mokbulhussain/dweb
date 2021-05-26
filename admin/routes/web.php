<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes(['register' => false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/logout',[App\Http\Controllers\HomeController::class,'logout'])->name('logout');

// About
Route::get('/getAbout',[\App\Http\Controllers\AboutController::class,'about']);
Route::post('/updateAbout',[\App\Http\Controllers\AboutController::class,'updateAbout']);
Route::post('/updateAboutWithImg',[\App\Http\Controllers\AboutController::class,'updateAboutWithImg']);

//Banner
Route::get('/getBanner',[\App\Http\Controllers\BannerController::class,'banner']);
Route::post('/updateBanner',[\App\Http\Controllers\BannerController::class,'updateBanner']);
Route::post('/updateBannerWithImg',[\App\Http\Controllers\BannerController::class,'updateBannerWithImg']);


//Service
Route::get('/getService',[\App\Http\Controllers\ServiceController::class,'service']);
Route::post('/addService',[\App\Http\Controllers\ServiceController::class,'addService']);
Route::post('/editService',[\App\Http\Controllers\ServiceController::class,'editService']);
Route::post('/updateServiceWithImg',[\App\Http\Controllers\ServiceController::class,'updateServiceWithImg']);
Route::post('/updateService',[\App\Http\Controllers\ServiceController::class,'updateService']);
Route::post('/deleteService',[\App\Http\Controllers\ServiceController::class,'deleteService']);


// About
Route::get('/getServiceDetail',[\App\Http\Controllers\ServiceDetailController::class,'serviceDetail']);
Route::post('/updateServiceDetail',[\App\Http\Controllers\ServiceDetailController::class,'updateServiceDetail']);
Route::post('/updateServiceDetailWithImg',[\App\Http\Controllers\ServiceDetailController::class,'updateServiceDetailWithImg']);



//Service
Route::get('/getCourse',[\App\Http\Controllers\CourseController::class,'course']);
Route::post('/addCourse',[\App\Http\Controllers\CourseController::class,'addCourse']);
Route::post('/editCourse',[\App\Http\Controllers\CourseController::class,'editCourse']);
Route::post('/updateCourseWithImg',[\App\Http\Controllers\CourseController::class,'updateCourseWithImg']);
Route::post('/updateCourse',[\App\Http\Controllers\CourseController::class,'updateCourse']);
Route::post('/deleteCourse',[\App\Http\Controllers\CourseController::class,'deleteCourse']);



//Service
Route::get('/getBlogCat',[\App\Http\Controllers\blogCatController::class,'blogCat']);
Route::post('/addBlogCategory',[\App\Http\Controllers\blogCatController::class,'addBlogCat']);
Route::post('/editBlogCat',[\App\Http\Controllers\blogCatController::class,'editBlogCat']);
Route::post('/updateBlogCat',[\App\Http\Controllers\blogCatController::class,'updateBlogCat']);
Route::post('/deleteBlogCat',[\App\Http\Controllers\blogCatController::class,'deleteBlogCat']);



//Blog
Route::get('/getBlog',[\App\Http\Controllers\BlogController::class,'getBlog']);
Route::post('addBlog',[\App\Http\Controllers\BlogController::class,'addBlog']);



Route::get('{AnyRoute}',function(){
    return view('home');
})->where('AnyRoute','.*');

