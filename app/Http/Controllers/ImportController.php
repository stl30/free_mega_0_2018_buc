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

        DB::statement('SET foreign_key_checks=0');
        Store::truncate();
        Product::truncate();
        DB::table('product_store')->truncate();
        DB::statement('SET foreign_key_checks=1');
        
        $stores = $this->parseCSV(storage_path('data/stores.csv'));

        // $products = collect($products);
        
        // dd($products->groupBy(9));

        //dd($data);
        foreach($stores as $store){
            // array_shift($prod);
            Store::create([
                'dealer_name' => $store[0],
                'city' => $store[1],
                'county' => $store[2],
                'address' => $store[3],
                'phone' => $store[4],
                'email' => $store[5],
                'monday' => $store[6],
                'tuesday' => $store[7],
                'wednesday' => $store[8],
                'thursday' => $store[9],
                'friday' => $store[10],
                'saturday' => $store[11],
                'sunday' => $store[12],
                'latitude' => $store[13],
                'longitude' => $store[14],
                'shop_profile' => $store[15],
                'postal_code' => $store[16]
            ]);
        }


        $prdImport = [];

        $productsCSV = $this->parseCSV(storage_path('data/stocks.csv'));
        //dd($productsCSV);

        $counter = 0;

        foreach($productsCSV as $prod){
            $prd = Product::updateOrCreate(
                [
                    'nume_produs' => $prod[2],
                    'name' => $prod[3]
                ],
                [
                    'nume_produs' => $prod[2],
                    'name' => $prod[3],
                    'producator' => $prod[4],
                    'caracteristics' => $prod[5],
                    'screen_size' => $prod[6],
                    'camera' => $prod[7],
                    'memory' => $prod[8]
                ]
            );

            $store = Store::where('dealer_name', $prod[9])
                            ->first();
            if($store){
                $prd->stores()->attach($store->id);
            }
            
            continue;
        //     $prdName = $prod[2]; 
        //     $prdVariation = $prod[3]; 
        //     if(!isset($prdImport[$prdName])){
        //         $prdImport[$prdName] = [];
        //     }

        //     if(!isset($prdImport[$prdName][$prdVariation])){
        //         $prdImport[$prdName][$prdVariation] = [];
        //         $prdImport[$prdName][$prdVariation]['stores'] = [];
        //         $prdImport[$prdName][$prdVariation]['info'] = $prod;
        //     }

        //     if(!in_array($prod[9],$prdImport[$prdName][$prdVariation]['stores'])){
        //         $prdImport[$prdName][$prdVariation]['stores'][] = $prod[9];
        //     }

        //     // = $prod;
        // }

        // foreach($prdImport as $prdName => $prdData){
        //     foreach($prdData as $prdVariation => $prdVariationData){
        //         // echo '<pre>';
        //         // print_r($prdVariationData);
        //         // echo '</pre>';
        //         $prd = Product::create([
        //                     'nume_produs' => $prdName,
        //                     'name' => $prdVariation,


        //                     //'sku_id' => $prdVariationData[1],
        //                     'producator' => $prdVariationData['info'][4],
        //                     'caracteristics' => $prdVariationData['info'][5],
        //                     'screen_size' => $prdVariationData['info'][6],
        //                     'camera' => $prdVariationData['info'][7],
        //                     'memory' => $prdVariationData['info'][8]
        //                 ]);

        //          echo '<h1>'.$prd->id.'</h1>';

        //         foreach( $prdVariationData['stores'] as $storeName){
        //             $store = Store::where('dealer_name', $storeName)
        //                             ->first();
        //             if($store){
        //                 $prd->store()->attach($store->id);
        //             }
        //             echo '<br/>'.(++$counter).'. '.$storeName;
        //         }    
        //     }
        }

        //$file = storage_path('stores.csv');

        dd(123);
    }

    

    private function parseCSV($fileName){

        $csv = array_map('str_getcsv',file($fileName));
        $result = [];

        array_shift($csv);

        foreach($csv as $prod){
            if(!strlen($prod[2])){
                break;
            }
            $result[] = $prod;
        }
        
        return $result;
    }
}
