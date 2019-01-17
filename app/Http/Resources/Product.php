<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    public function toArray($request)
    {
        $product = [
            'id' => $this->id,
            'sku' => $this->sku,
            'brand' => $this->brand,
            'title' => $this->title,
            'img' => $this->img($request),
            'description' => $this->description,
            'style'=> $this->style,
            'fabric' => $this->fabric,
            'upgrade' => $this->upgrade,
            'features' => json_decode($this->features),
            'colors' => $this->colors($request),
            'sizes' => json_decode($this->sizes)
        ];
        
        return $product;
    }
    
    // Format colors & add img to color object.
    public function colors($request)
    {
        $sku = $this->sku;
        
        $colors = json_decode($this->colors);
         
        foreach($colors as $key => $value) {
            
            $colors[$key]->img = '/images/product/' . $sku . '_'. $colors[$key]->abr .'.jpg';
            
        };
        
        return $colors;
        
    }
    
    // Return default product img.
    public function img($request)
    {
        
        $sku = $this->sku;
        $colors = json_decode($this->colors);

        foreach($colors as $key=>$value) {
            if (isset($colors[$key]->default)) {
                return '/images/product/' . $sku . '_'. $colors[$key]->abr .'.jpg';
            };
        };
        
    }
    
}


// $productFields = [
        //     'id' => $this->id,
        //     'sku' => $this->sku,
        //     'brand' => $this->brand,
        //     'title' => $this->title,
        //     'description' => $this->description,
        //     'img' => img($this->sku, json_decode($this->colors)),
        //     'style'=> $this->style,
        //     'fabric' => $this->fabric,
        //     'upgrade' => $this->upgrade,
        //     'features' => json_decode($this->features),
        //     'colors' => colors($this->sku, json_decode($this->colors)),
        //     'sizes' => json_decode($this->sizes)
        // ];