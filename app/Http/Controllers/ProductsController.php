<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Product;
use App\Http\Resources\Product as ProductResource;


class ProductsController extends Controller
{
    public function index()
    {
        // Get Products
        $products = Product::paginate(3);
        
        // Return collection of products as resource
        return ProductResource::collection($products);
    }

    public function show($id)
    {
        // Get Product
        $product = Product::findOrFail($id);
        
        // Return single Product as a resource
        return new ProductResource($product);
    }
    
    public function colors($id)
    {
        // Get Product
        $product = Product::findOrFail($id);
        
        // Return single Product as a resource
        return new ProductResource($product);
    }
}


// $model = User::where('votes', '>', 100)->firstOrFail();