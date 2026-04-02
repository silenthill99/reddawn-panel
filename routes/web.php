<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Resources\SanctionResource;
use App\Http\Resources\UserResource;
use App\Models\Sanction;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware("auth")->group(function () {
    Route::get('/', function () {
        $sanctions = Sanction::with("emittedBy")->whereNotIn('pseudo', User::query()->select('name'))->paginate(20);
        return Inertia::render('welcome', ['sanctions' => SanctionResource::collection($sanctions)]);
    })->name('home');
    Route::get("/logout", [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    Route::get("/dashboard", function () {
        $sanctions = Auth::user()->emittedSanctions;
        return Inertia::render("dashboard", ["sanctions" => SanctionResource::collection($sanctions)]);
    })->name("dashboard");

    Route::get("/sanctions-staff", function () {
        Gate::authorize("isAdmin");
        $sanctions = Sanction::with('emittedBy')->whereIn("pseudo", User::query()->select('name'))->paginate(20);
        return Inertia::render('sanctions-staff', [
            "sanctions" => SanctionResource::collection($sanctions)
        ]);
    })->name("erreurs-staff");

    Route::post("/sanctions/create", function (Request $request) {
        Gate::authorize("isAdmin");
        $data = $request->validate([
            "pseudo" => "required"
        ]);
        Sanction::create($data);
    });
});

require __DIR__.'/auth.php';
