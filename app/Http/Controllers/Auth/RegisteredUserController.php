<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Mail\AccountCreated;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['password'] = Str::random(60);

        $user = User::create($data);

        $token = Password::createToken($user);
        $url = route('password.create', ['token' => $token, 'email' => $user->email]);

        Mail::to($user->email)->send(new AccountCreated($user, $url));

        return redirect()->route('login');
    }
}
