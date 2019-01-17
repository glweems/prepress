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
        return [
            'id' => $this->id,
            'brand' => $this->brand,
            'products' => new ProductCollection(new ProductResource(Product::all()->where('brand', $this->brand)))
        ];
    }
}
