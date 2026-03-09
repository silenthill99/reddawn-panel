import type { Role, Sanction } from '@/types/index';

export type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
    emittedSanctions: Sanction[];
    role: Role
};

export type Auth = {
    user: User;
};
