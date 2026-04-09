<?php

namespace App\Http\Requests;

use App\Models\Sanction;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreSanctionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->can('create', Sanction::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'pseudo' => ['required', 'string', 'max:255'],
            'sanction_type' => ['required', 'string', 'max:255'],
            'reason' => ['required', 'string'],
            'duration' => ['required', 'string', 'max:255'],
        ];
    }
}
