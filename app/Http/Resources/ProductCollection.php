<?php

namespace App\Http\Resources;

use App\Http\Resources\Product;
use App\Http\Resources\Product as ProductResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    public function toArray($request)
    {
        $arr = new ProductResource($request);
        
        return parent::toArray(new ProductResource((new Product($request))));
    }
    
    // public function with($request)
    // {
    //     $count = count($this->toArray($request));
    //     return [
    //         'count' => $count
    //     ];
    // }
}

// <?php

// namespace App\Http\Resources;

// use App\Model\Product;
// use Illuminate\Http\Resources\Json\ResourceCollection;

// class ProductCollection extends ResourceCollection
// {
//     public function toArray($request)
//     {
//         $product = new Product($request);
        
//         return $product::toArray;
//     }
// }
