<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\Product;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;

class Brand extends JsonResource
{
    public function toArray($request)
    {
        // $test = Product::class;
        // $product = Product::all()->where('brand', $this->brand);
        // $products = new ProductCollection($product);
        // $fields = [
        //     'id' => $products
        // ];
        $products = Product::get();
        return [
            'id' => $this->id,
            'brand' => $this->brand,
            'products' => $products->map(function ($product) { return $product->only([
                'id', 'title', 'sku', 'fabric', 'upgrade', 'category'
                ]);}),
            
        ];
    }
}
