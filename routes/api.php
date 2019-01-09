<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List Products
Route::get('products', 'ProductsController@index');

// List Single Product
Route::get('product/{id}', 'ProductsController@show');

// List Single Product Colors
Route::get('product/colors/{id}', 'ProductsController@colors');

// Get Image From 'public/images'
Route::get('images/{filename}', 'PhotoController@image');

// Get Image From 'public/images/product'
Route::get('images/product/{filename}', 'PhotoController@product');