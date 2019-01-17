<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Model\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;

class ProductController extends Controller
{
    public function index()
    {
        // Get Products
        $products = Product::all();
        
        // Return collection of products as resource
        return new ProductCollection(Product::all());
    }

    public function show($sku)
    {
        // Return single Product as a resource
        return new ProductResource(Product::where('sku', $sku)->first());
    }
}