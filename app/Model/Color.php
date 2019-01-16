<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    public function colors()
    {
       return $this->belongsTo(Product::class);
    }
}
