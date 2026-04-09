<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class SendTokenUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-token-user {email : l\'adresse mail du staff}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Associe un Token à un membre du staff';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $user = User::where('email', $this->argument('email'))->first();

        if (! $user) {
            $this->error('Utilisateur introuvable');

            return self::FAILURE;
        }

        $token = $user->createToken('minecraft-plugin');

        $this->info("Token généré pour $user->name : ");
        $this->newLine();
        $this->line($token->plainTextToken);

        return self::SUCCESS;
    }
}
