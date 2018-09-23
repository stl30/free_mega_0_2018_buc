<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductViews extends Model
{
    protected $fillable = [
        "product_id"
    ];

    public function product(){
        return $this->belongsTo('App\Product');
    }
    //
}
