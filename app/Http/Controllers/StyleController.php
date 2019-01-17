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
        return new StyleCollection(StyleResource::collection(Style::all()));
    }
    public function show(Style $style)
    {
        //
    }
};