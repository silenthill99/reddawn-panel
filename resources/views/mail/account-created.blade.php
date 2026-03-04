<x-mail::message>
# Bienvenue {{ $user->name }} !

Votre compte a bien été créé. Cliquez sur le bouton ci-dessous pour définir votre mot de passe.

<x-mail::button :url="$createPasswordUrl">
Créer mon mot de passe
</x-mail::button>

Si vous n'avez pas créé de compte, aucune action n'est requise.

Merci,<br>
{{ config('app.name') }}
</x-mail::message>