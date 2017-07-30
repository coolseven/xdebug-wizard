<?php

namespace App\Http\Controllers;


class PageController extends Controller
{
    /**
     * page requests
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function app()
    {
        return view('app');
    }
}
