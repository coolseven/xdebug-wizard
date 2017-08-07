<?php

namespace App\Http\Controllers;


use Closure;
use Illuminate\Support\Facades\Cache;

class PageController extends Controller
{
    /**
     * Controller-Scoped Middleware
     */
    public function __construct()
    {
        $this->middleware(function($request , Closure $next){
            return $next($request);
        });
    }

    /**
     * page requests
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public static function app(Cache $cache)
    {
        dd($cache);
        return view('app');
    }
}
