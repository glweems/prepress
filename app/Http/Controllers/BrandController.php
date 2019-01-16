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
        return BrandResource::collection(Brand::all());
    }
    public function show($brand)
    {
        return new BrandCollection(Brand::all()->where('brand', $brand));
    }
}
