<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('info', function (Blueprint $table) {
            $table->id('id');
            $table->string('phone1');
            $table->string('phone2');
            $table->string('address');
            $table->string('office_time');
            $table->string('office_day');
            $table->string('email1');
            $table->string('email2');
            $table->string('facebook');
            $table->string('twitter');
            $table->string('instagram');
            $table->string('linkdin');
            $table->text('logo');
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('info');
    }
}
