import type { User } from '@/types/auth';

export type * from './auth';

export interface MenuItem {
    label: string;
    icon?: string;
    href: string;
}

export interface Sanction {
    id: number;
    pseudo: string;
    sanction_type: string;
    emittedBy: User,
    reason: string;
    duration: string;
}

export interface PaginatedProps<T> {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        links: {
            label: string;
            url: string | null;
            active: boolean;
        }[]
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    }
}
