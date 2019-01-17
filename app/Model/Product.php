<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function style()
    {
       return $this->belongsTo(Style::class);
    }
}
