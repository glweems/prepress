<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\Color;
use App\Http\Resources\Color as ColorResource;
use Illuminate\Support\Arr;
// use App\Http\Resources\ProductCollection;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // function img($abr, $sku)
        // {
        //     $z = $abr . $sku;
        //     return $z;
        $sku = $this->sku;
        $colors = json_decode($this->colors);
        
        foreach($colors as $key=>$value) {
           $colors[$key]->img = $sku . '_'. $colors[$key]->abr .'.jpg';
        };
        
        
        $productFields = [
            'id' => $this->id,
            'sku' => $sku,
            'brand' => $this->brand,
            'title' => $this->title,
            'description' => $this->description,
            'category'=> $this->category,
            'fabric' => $this->fabric,
            'upgrade' => $this->upgrade,
            'features' => json_decode($this->features),
            'colors' => $colors,
            'sizes' => json_decode($this->sizes)
        ];
        
        return $productFields;
    }
}
