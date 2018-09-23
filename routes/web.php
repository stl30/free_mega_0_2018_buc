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
Route::get('import', 'ImportController@doIt');
Route::get('get-products', 'ProductController@index');
Route::get('get-variants', 'ProductController@variantsIndex');
Route::get('get-product-details/{name}', 'ProductController@show');

Route::group(['prefix' => 'reports'], function(){
    Route::get('view-products', 'ProductViewsController@index');
    Route::get('view-product-tracking/{id}', 'ProductViewsController@store');
    Route::get('view-product-history/{id}', 'ProductViewsController@history');

    Route::get('view-variants', 'ProductViewsController@variantsIndex');
    Route::get('view-variant-history/{id}', 'ProductViewsController@variantHistory');
});
