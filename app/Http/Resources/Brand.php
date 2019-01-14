<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\Product;
// use App\Resources\ProductCollection;

class Brand extends JsonResource
{
    public function toArray($request)
    {
        $brand = [
            'id' => $this->id,
            'brand' => $this->brand,
        ];
        return $brand;
    }
}
