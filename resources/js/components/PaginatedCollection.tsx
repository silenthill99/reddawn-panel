import { router } from '@inertiajs/react';
import { decode } from 'html-entities';
import React from 'react';
import { Button } from '@/components/ui/button';
import type { PaginatedProps } from '@/types';

type Props = {
    paginatedLinks: PaginatedProps<unknown>
}

const PaginatedCollection = ({paginatedLinks}: Props) => {
    return (
        <div className={'flex w-full flex-wrap items-center justify-between'}>
            <p>
                Affichage des résultats{' '}
                <strong>{paginatedLinks.meta.from}</strong> à {" "}
                <strong>{paginatedLinks.meta.to}</strong> sur <strong>{paginatedLinks.meta.total}</strong>
            </p>
            <div>
                {paginatedLinks.meta.links.map((link, index) => (
                    <Button
                        onClick={() => router.visit(link.url || '')}
                        key={index}
                        disabled={link.active || !link.url}
                    >
                        {decode(link.label)}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default PaginatedCollection;
