<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
        $product = [
            'id' => $this->id,
            'sku' => $this->sku,
            'brand' => $this->brand,
            'title' => $this->title,
            'fabric' => $this->fabric,
            'upgrade' => $this->upgrade,
            'features' => json_decode($this->features),
            'colors' => json_decode($this->colors)
        ];
        return $product;
    }
}
