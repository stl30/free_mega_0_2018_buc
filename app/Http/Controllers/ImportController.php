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
        $data = $this->parseCSV(storage_path('data/stocks.csv'));
        //dd($data);
        foreach($data as $prod){
            array_shift($prod);
            Product::create([
                'nume_produs' => $prod[1],
                'caracteristics' => $prod[4]
            ]);
        }

        //dd($data);

        //$file = storage_path('stores.csv');

        dd(123);
    }

    

    private function parseCSV($fileName){

        $result = [];
        $handle = fopen($fileName, "r");
        if ($handle) {
            while (($line = fgets($handle)) !== false) {
                // if(!strlen(str_replace(',','',$line))){
                //     continue;
                // }
                // process the line read.
                $prod = explode(",",$line);
                if(!strlen($prod[2])){
                    break;
                }
                $result[] = $prod;
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
}
