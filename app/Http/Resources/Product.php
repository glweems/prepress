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
        return [
            'id' => $this->id,
            'sku' => $this->sku,
            'brand' => $this->brand,
            'title' => $this->title,
            'fabric' => $this->fabric,
            'upgrade' => $this->upgrade,
            'features' => $this->features,
            'features' => $this->features,
            'colors' => $this->colors,
        ];
    }
}
