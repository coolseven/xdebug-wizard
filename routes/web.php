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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{missing}', function () {
    return view('welcome');
});

Route::get('/hello/world','HelloController@world');

Route::get('/api/ping','ApiController@pong');

Route::get('/xdebug-wizard','XdebugWizardController@home');

Route::get('/xdebug-wizard/{any}','XdebugWizardController@redirect');
