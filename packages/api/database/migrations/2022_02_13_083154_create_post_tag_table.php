<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('post_tag')){
            Schema::create('post_tag', function (Blueprint $table) {
                $table->integer('post_id')->unsigned()->nullable();
                $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
    
                $table->integer('tag_id')->unsigned()->nullable();
                $table->foreign('tags_id')->references('id')->on('tags')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_tag');
    }
}
