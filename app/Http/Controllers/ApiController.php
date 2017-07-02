<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApiController extends Controller
{

    public function pong(Request $request)
    {
        return new JsonResponse('pong√');
    }
}
