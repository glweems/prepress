<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List Products
Route::get('products', 'ProductController@index');

// List Single Product
Route::get('product/{sku}', 'ProductController@show');

// Get Image From 'public/images/product'
Route::get('images/product/{filename}', 'ProductController@img');

// List All Brands
Route::get('brands', 'BrandController@index');

// Get Image From 'public/images'
Route::get('images/{filename}', 'PhotoController@image');
