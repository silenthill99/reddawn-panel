import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { cn } from '@/lib/utils';
import { logout } from '@/routes';
import type { MenuItem } from '@/types';

type Props = {
    menuItem: MenuItem[];
};

const MenuDesktop = ({ menuItem }: Props) => {
    const { url } = usePage();
    const { auth } = usePage().props;

    const isActive = (link: string) => {
        if (link === '/') {
            return url === '/';
        }
        return url.startsWith(link);
    };

    return (
        <div
            className={
                'fixed top-0 left-20 z-50 hidden h-screen w-89 flex-col items-center justify-between bg-black/50 lg:flex'
            }
        >
            <img
                src={'https://mineskin.eu/helm/' + auth.user.name}
                className={'m-5 mx-auto size-58 rounded-full bg-white'}
                alt={'Photo de profil'}
            />
            <div className={'w-full text-white'}>
                <nav className={'w-full'}>
                    <ul className={'w-full'}>
                        {menuItem.map((item, id) => (
                            item.isVisible && (
                                <li key={id} className={'w-full'}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            isActive(item.href) &&
                                            'bg-black/25',
                                            'block p-5 text-center hover:bg-black/25',
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </nav>
            </div>
            <Link
                method={'post'}
                href={logout()}
                className={'w-full p-5 text-center text-white'}
            >
                Se déconnecter
            </Link>
        </div>
    );
};

export default MenuDesktop;
