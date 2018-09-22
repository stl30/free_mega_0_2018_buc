<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sku_id')->default('');
            $table->string('nume_produs')->default('');
            $table->string('name')->default('');
            $table->string('producator')->default('');
            $table->string('caracteristics')->default('');
            $table->string('screen_size')->default('');
            $table->string('camera')->default('');
            $table->string('memory')->default('');

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
        Schema::dropIfExists('products');
    }
}
