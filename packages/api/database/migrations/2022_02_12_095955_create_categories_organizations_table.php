<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_organizations', function (Blueprint $table) {
            $table->integer('categories_id')->unsigned();
            $table->integer('organizations_id')->unsigned();

            $table->foreign('categories_id')->references('id')->on('categories')
                ->onDelete('cascade');
            $table->foreign('organizations_id')->references('id')->on('organizations')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories_organizations');
    }
}

