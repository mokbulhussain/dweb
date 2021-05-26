<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BlogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog', function (Blueprint $table) {
            $table->bigIncrements('blog_id');
            $table->string('blog_title');
            $table->text('detail');
            $table->date('date');
            $table->text('img');
            $table->unsignedBigInteger('blog_cat_id');
            $table->foreign('blog_cat_id')->references('blog_cat_id')->on('blog_cat')->onDelete('cascade');;
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
        //
    }
}
