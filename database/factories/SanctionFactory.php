<?php

namespace Database\Factories;

use App\Models\Sanction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Sanction>
 */
class SanctionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "pseudo" => $this->faker->userName(),
            "emitted_by" => 1,
            "sanction_type" => $this->faker->randomElement(['Bannissement', 'Mute', 'Kick', 'Avertissement']),
            "reason" => $this->faker->sentence(),
            "duration" => $this->faker->randomElement(['1h', '6h', '12h', '1d', '3d', '7d', '14d', '30d', 'permanent']),
        ];
    }
}
