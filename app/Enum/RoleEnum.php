<?php

namespace App\Enum;

enum RoleEnum: string
{
    case Aventurier = 'Aventurier';
    case VIP = 'V.I.P.';
    case Builder = 'Constructeur';
    case Developer = 'Développeur';
    case Modo = 'Modérateur';
    case SuperModo = 'Super Modérateur';
    case Responsable = 'Responsable';
    case Admin = 'Administrateur';

    public function level(): int
    {
        return match ($this) {
            self::Aventurier => 1,
            self::VIP => 2,
            self::Builder => 3,
            self::Developer => 4,
            self::Modo => 5,
            self::SuperModo => 6,
            self::Responsable => 7,
            self::Admin => 8,
        };
    }
}
