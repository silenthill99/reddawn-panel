<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\CreatePasswordController;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('login.store');

    Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store'])->name('register.store');

    Route::get('/create-password/{token}', [CreatePasswordController::class, 'create'])->name('password.create');
    Route::post('/create-password', [CreatePasswordController::class, 'store'])->name('password.store');
});
