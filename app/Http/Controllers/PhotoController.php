<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
Use DB;


class PhotoController extends Controller
{
    public function image($fileName){
        $path = public_path().'/images/'.$fileName;
        return Response::download($path);        
    }
}