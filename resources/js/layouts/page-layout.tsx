import { usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import React from 'react';
import MenuDesktop from '@/components/menu-desktop';
import MenuMobile from '@/components/menu-mobile';
import { dashboard, erreursStaff, home } from '@/routes';
import type { MenuItem } from '@/types';

const PageLayout = ({children}: PropsWithChildren) => {
    const {is_admin} = usePage().props;
    const menu: MenuItem[] = [
        {
            label: "Page d'accueil",
            href: home().url,
            isVisible: true
        },
        {
            label: "Tableau de bord",
            href: dashboard().url,
            isVisible: true
        },
        {
            label: "Erreurs staff",
            href: erreursStaff().url,
            isVisible: is_admin
        }
    ];

    return (
        <div className="min-h-screen bg-font">
            <MenuDesktop menuItem={menu} />
            <MenuMobile menuItem={menu} />
            <div className={'relative ml-auto min-h-screen lg:w-5xl lg:h-screen'}>
                <img
                    src="/images/logo-reddawn.png"
                    alt=""
                    className={'w-100.5 blur-sm lg:h-full lg:w-auto'}
                />
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
