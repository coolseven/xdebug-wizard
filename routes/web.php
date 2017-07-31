<?php

/**
 * this route is for test only, feel free to delete it.
 */
Route::get( '/welcome', function () {
    return view( 'welcome' );
} );

/**
 * This web app is a SPA ,so most of the requests are ajax requests,
 * and page requests happen only when a user opens our web app or refreshes the page.
 *
 * We always return the same content for page requests,
 * which contains nothing but the html structure and the app.js file.
 * and the app.js file will do all the rest for us.
 */
Route::get( '{app}', 'PageController@app' )->where( 'app', '.*' );
