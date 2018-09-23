<?php

namespace App\Http\Controllers;

use App\ProductViews;
use Illuminate\Http\Request;

use App\Product;
use DB;

class ProductViewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = ProductViews::selectRaw('product_id, count(id) as views')
                                ->groupBy('product_id')
                                ->orderBy('views', 'DESC')
                                ->with('product')
                                ->get();

        return $products;
    }
    public function variantsIndex()
    {
        $products = ProductViews::selectRaw('product_id, count(id) as views')
                                ->groupBy('product_id')
                                ->orderBy('views', 'DESC')
                                ->with('product')
                                ->get();

        return $products;
    }
    public function history($id)
    {
        $products = ProductViews::selectRaw('count(id) as views, DATE(created_at) as date')
                                ->groupBy(DB::raw('DATE(created_at)'))
                                ->with('product')
                                ->where('product_id', $id)
                                ->get();

        return $products;
    }
    public function variantHistory($id)
    {
        $products = ProductViews::selectRaw('count(id) as views, DATE(created_at) as date')
                                ->groupBy(DB::raw('DATE(created_at)'))
                                ->with('product')
                                ->where('product_id', $id)
                                ->get();

        return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($id, Request $request)
    {
        $product = Product::findOrFail($id);

        $view = ProductViews::create([
            'product_id' => $id
        ]);

        return $view;
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductViews  $productViews
     * @return \Illuminate\Http\Response
     */
    public function show(ProductViews $productViews)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProductViews  $productViews
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductViews $productViews)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductViews  $productViews
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductViews $productViews)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductViews  $productViews
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductViews $productViews)
    {
        //
    }
}
