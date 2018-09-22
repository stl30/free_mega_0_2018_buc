<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->increments('id');
            $table->string('dealer_name');
            $table->string('city')->default('');
            $table->string('county')->default('');
            $table->string('address')->default('');
            $table->string('phone')->default('');
            $table->string('email')->default('');
            $table->string('monday')->default('');
            $table->string('tuesday')->default('');
            $table->string('wednesday')->default('');
            $table->string('thursday')->default('');
            $table->string('friday')->default('');
            $table->string('saturday')->default('');
            $table->string('sunday')->default('');
            $table->string('latitude')->default('');
            $table->string('longitude')->default('');
            $table->string('shop_profile')->default('');
            $table->string('postal_code')->default('');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores');
    }
}
