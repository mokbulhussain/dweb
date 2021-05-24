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


Route::get('{AnyRoute}',function(){
    return view('home');
})->where('AnyRoute','.*');

