<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
        'sku_id',
        'nume_produs',
        'name',
        'producator',
        'caracteristics',
        'screen_size',
        'camera',
        'memory'
    ];

    //
    public function store(){
        return $this->belongsToMany('App\Store');
    }
}
