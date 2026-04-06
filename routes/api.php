<?php

use App\Http\Controllers\SanctionController;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/sanctions/create', [SanctionController::class, 'store'])->middleware('auth:sanctum');

Route::get('/register', function (Request $request) {
    $roles = Role::all();
    $user = Auth::guard('web')->user();
    $user?->load('emittedSanctions');

    return response()->json([
        $roles,
        $user,
    ]);
})->middleware('auth:sanctum');
