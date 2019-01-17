<?php

namespace App\Http\Controllers;

use App\Model\Style;
use App\Http\Resources\Style as StyleResource;
use App\Http\Resources\StyleCollection;
use Illuminate\Http\Request;

class StyleController extends Controller
{
    public function index()
    {
        $select = Style::all();
        $resource = new StyleResource($select);
        $collection = new StyleCollection($resource);
        return $collection;
    }
    public function show($style)
    {
        $select = Style::all()->where('style', $style);
        $resource = new StyleResource($select);
        $collection = new StyleCollection($resource);
        return $collection;
    }
};