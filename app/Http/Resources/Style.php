<?php

namespace App\Http\Resources;

use App\Model\Product;
use App\Http\Resources\ProductCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class Style extends JsonResource
{
    public function toArray($request)
    {
       return [
			 'id'=> $this->id,
			 'style'=> $this->style,
			 'products' => new ProductCollection(Product::all()->where('style', $this->style))
		 ];
    }
}
