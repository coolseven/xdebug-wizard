<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class XdebugWizardController extends Controller
{
    public function home()
    {
        return view('xdebug-wizard.home');
    }

    public function redirect(Request $request)
    {
        $requestPath = $request->path() ;

        $vueRoutePath = Str::replaceFirst('xdebug-wizard','',$requestPath);

        $query = urlencode( $request->getQueryString() );

        return redirect('/xdebug-wizard?_path=' . $vueRoutePath .'&_query=' . $query);
    }
}
