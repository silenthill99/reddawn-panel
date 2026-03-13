<?php

namespace App\Enum;

enum RoleEnum: int
{
    case AventurierDeM = 1;
    case VIP = 2;
    case Builder = 3;
    case Developer = 4;
    case Modo = 5;
    case SuperModo = 6;
    case Responsable = 7;
    case Admin = 8;
    public function label(): string
    {
        return match ($this) {
            self::AventurierDeM => 'Aventurier',
            self::VIP => 'VIP',
            self::Builder => 'Builder',
            self::Developer => 'Développeur',
            self::Modo => 'Modérateur',
            self::SuperModo => 'Super Modérateur',
            self::Responsable => 'Responsable',
            self::Admin => 'Administrateur',
        };
    }
}
