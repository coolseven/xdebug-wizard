<?php
/**
 * Created for xdebug-wizard.
 * File: ApiController.php
 * User: cools
 * Date: 2017/7/30 0030
 * Time: 23:14
 * Description :
 */

namespace App\Http\Controllers;


use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    public function pong()
    {
        return new JsonResponse('pong');
    }
}