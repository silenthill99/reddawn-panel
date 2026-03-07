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

        $remember = $request->boolean('remember');

        if (Auth::attempt($data, $remember)) {
            $request->session()->regenerate();
            return redirect()->intended(route('home'));
        }

        return redirect()->back()->withErrors(["failure" => "identifiants invalides"]);
    }

    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
