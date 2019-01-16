<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Model\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
class ProductController extends Controller
{
    public function index()
    {
        // Get Products
        $products = Product::paginate(10);
        
        // Return collection of products as resource
        return new ProductCollection($products);
    }

    public function show($sku)
    {
        // Get Product
        $product = Product::where('sku', $sku)->first();

        // Return single Product as a resource
        return new ProductResource($product);
    }
    public function img($fileName){
        $path = public_path().'/images/product/'.$fileName;
        return Response::download($path);        
    }
}