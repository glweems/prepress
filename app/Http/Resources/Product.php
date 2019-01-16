<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Colors;

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
        $sku = $this->sku;
        $colors = json_decode($this->colors);
        $img;
        
        foreach($colors as $key=>$value) {
           $colors[$key]->img = '/api/images/product/' . $sku . '_'. $colors[$key]->abr .'.jpg';
           if (isset($colors[$key]->default)) {
                $img = '/images/product/' . $sku . '_'. $colors[$key]->abr .'.jpg';
           };
        };
        
        
        $productFields = [
            'id' => $this->id,
            'sku' => $sku,
            'brand' => $this->brand,
            'title' => $this->title,
            'description' => $this->description,
            'img' => $img,
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
