<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * this is a test page, feel free to delete this route
 */
Route::get( '/welcome', function () {
    return view( 'welcome' );
} );

/**
 * In an SPA , most of the requests are ajax requests,
 * and page request only happens when a user opens our webapp or refreshes a page when using the webapp.
 *
 * Whichever page is requested, we always return the same content.
 * the content contains nothing but the html structure and the webapp js files.
 * and the webapp js files will render the real page content.
 */
Route::get( '{app}', 'PageController@app' )->where( 'app', '.*' );
