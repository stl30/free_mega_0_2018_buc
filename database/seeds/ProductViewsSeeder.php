<?php

use Illuminate\Database\Seeder;

use App\Product;
use App\ProductViews;

use Carbon\Carbon;
class ProductViewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Product::pluck('id');

        for($i = 0; $i < 1500; $i++){
            $product = ProductViews::create([
                'product_id' => $products[rand(0, sizeof($products) - 1)]
            ]);

            $product->created_at = new Carbon('2018-09-' . rand(1, 23));
            $product->save();
        }

        //
    }
}
