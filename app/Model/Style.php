<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Product;

class Style extends Model
{
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
