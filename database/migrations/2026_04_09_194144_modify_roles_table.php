<?php

use App\Enum\RoleEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->integer('level')->change();
            $table->enum('label', RoleEnum::cases())->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->string('label')->change();
            $table->enum('level', array_map(fn (RoleEnum $role) => $role->level(), RoleEnum::cases()))->change();
        });
    }
};
