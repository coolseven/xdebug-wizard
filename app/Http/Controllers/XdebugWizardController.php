<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class XdebugWizardController extends Controller
{
    public function home()
    {
        return view('xdebug-wizard.home');
    }

    public function redirect(Request $request)
    {
        $routePath = $request->path();

        $query = urlencode( $request->getQueryString() );

        return redirect('/xdebug-wizard?__routePath=' . $routePath .'&__query=' . $query);
    }
}
