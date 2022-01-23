<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryOrganizationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('category_organization')) {
            Schema::create('category_organization', function (Blueprint $table) {
                $table->id();
            });
        }
        Schema::table('category_organization', function (Blueprint $table) {
           $table->foreignId('category_id')->constrained();
           $table->foreignId('organizations_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_organization');
    }
}
