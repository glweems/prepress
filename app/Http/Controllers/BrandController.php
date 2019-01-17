<?php

namespace App\Http\Controllers;

use App\Model\Brand;
use App\Http\Resources\Brand as BrandResource;
use App\Http\Resources\BrandCollection;
use Illuminate\Http\Request;

class BrandController extends Controller
{
 
    public function index()
    {
        $select = Brand::all();
        $resource = new BrandResource($select);
        $collection = new BrandCollection($resource);
        
        return $collection;
    }
    public function show($brand)
    {
        $select = Brand::all()->where('brand', $brand);
        $resource = new BrandResource($select);
        $collection = new BrandCollection($resource);
        
        return $collection;
    }
}
