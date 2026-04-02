<?php

use App\Http\Controllers\SanctionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post("/sanctions/create", [SanctionController::class, "store"])->middleware('auth:sanctum');
