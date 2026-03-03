<?php

use Illuminate\Support\Facades\Route;

Route::middleware("auth")->group(function () {
    Route::inertia('/', 'welcome')->name('home');
});

require __DIR__.'/auth.php';
