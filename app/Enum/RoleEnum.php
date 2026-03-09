<?php

namespace App\Enum;

use App\Role;

enum RoleEnum: string
{
    case Aventurier = "Aventurier";
    case VIP = "VIP";
    case Builder = "Builder";
    case Developer = "Developeur";
    case Modo = "Modérateur";
    case SuperModo = "Super Modérateur";
    case Responsable = "Responsable";
    case Admin = "Administrateur";

    public function toRole(): Role
    {
        return match ($this) {
            self::Aventurier => new Role('Aventurier', 1),
            self::VIP => new Role('VIP', 2),
            self::Builder => new Role('Builder', 3),
            self::Developer => new Role('Développeur', 3),
            self::Modo => new Role('Modérateur', 4),
            self::SuperModo => new Role('Super Modérateur', 5),
            self::Responsable => new Role('Responsable', 6),
            self::Admin => new Role('Administrateur', 7),
        };
    }
}
