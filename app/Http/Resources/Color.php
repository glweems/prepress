<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Color extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return 
        [
          'abr' => $this->abr,
          'title' => $this->title, 
          'hex' => $this->hex,  
        ];
    }
}
