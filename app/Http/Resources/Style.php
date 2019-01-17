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
			 'count' => count($this->products($request)),
			 'img' => $this->img($request),
			 'products' => $this->products($request),
		 ];
	 }
	 
	 public function products($request)
	 {
		 $style = $this->style;
		 
		 $product = Product::all()->where('style', $style);
		 
		 $products = new ProductCollection($product);
		 
		 return $products;
	 }
	 
	 public function img($request)
	 {
		 $img = '/images/styles/'. 'style_' . $this->style . '.jpg';
		 
		 return strtolower($img);
	 }
	 
	//  public function with($request)
	//  {
	// 	return [
	// 		'count' => count($this->products($request))
	// 	];
	//  }
}
