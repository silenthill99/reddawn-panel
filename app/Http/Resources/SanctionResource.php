<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SanctionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'pseudo' => $this->pseudo,
            'sanction_type' => $this->sanction_type,
            'emittedBy' => new UserResource($this->whenLoaded('emittedBy')),
            'reason' => $this->reason,
            'duration' => $this->duration,
        ];
    }
}
