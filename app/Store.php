<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $fillable = [
        'dealer_name',
        'city',
        'county',
        'address',
        'phone',
        'email',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
        'latitude',
        'longitude',
        'shop_profile',
        'postal_code'
    ];
}
