<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function world( Request $request )
    {
        return '<h1>Hello World</h1>';
    }
}
