<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use function Termwind\render;

class AuthenticatedSessionController extends Controller
{
    public function create() {
        return Inertia::render("auth/login");
    }

    public function store(LoginRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);

        if (Auth::attempt($data)) {
            $request->session()->regenerate();
            return redirect()->intended(route('home'));
        }

        return redirect()->back()->withErrors(["failure" => "identifiants invalides"]);
    }
}
