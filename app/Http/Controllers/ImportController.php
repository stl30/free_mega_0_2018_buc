<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Store;
use App\Product;

use DB;

class ImportController extends Controller
{
    //
    public function doIt(){
        Store::truncate();
        Product::truncate();
        DB::table('product_store')->delete();

        $file = storage_path('stocks.csv');
        $file = storage_path('stocks.csv');

        dd(123);
    }

    public function i(){
        /*
        echo '<pre>';
        print_r($data);
        echo '</pre>';

        function parseCSV($fileName){

            $result = [];
            $handle = fopen($fileName, "r");
            if ($handle) {
                while (($line = fgets($handle)) !== false) {
                    // process the line read.
                    $result[] = explode(",",$line);
                    // echo '<pre>';
                    // print_r($cells);
                    // echo '</pre>';
                }
            
                fclose($handle);
            } else {
                // error opening the file.
                die('nah');
            }

            array_shift($result);
            return $result;
        }
        */


    }
}
