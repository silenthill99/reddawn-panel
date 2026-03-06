<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Resources\SanctionResource;
use App\Models\Sanction;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware("auth")->group(function () {
    Route::get('/', function () {
        $sanctions = Sanction::with("emittedBy")->paginate(20);
        return Inertia::render('welcome', ['sanctions' => SanctionResource::collection($sanctions)]);
    })->name('home');
    Route::get("/logout", [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

require __DIR__.'/auth.php';
