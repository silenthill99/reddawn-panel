import { Link, usePage } from '@inertiajs/react';
import { MenuIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { MenuItem } from '@/types';

type Props = {
    menuItem: MenuItem[];
};

const MenuMobile = ({ menuItem }: Props) => {
    const [isOpen, setOpen] = useState(false);
    const { auth } = usePage().props;
    return (
        <div className={'relative block lg:hidden'}>
            <Button
                variant="secondary"
                className="absolute top-2 left-2 z-10"
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
            </Button>
            <div
                className={cn(isOpen && 'fixed inset-0 z-20')}
                onClick={() => setOpen(false)}
            />
            <div
                className={cn(
                    !isOpen && 'hidden',
                    'fixed top-0 right-1/4 bottom-0 left-0 z-50 bg-black/50 text-white backdrop-blur-sm',
                )}
            >
                <Button
                    variant={'ghost'}
                    className="m-2"
                    onClick={() => setOpen(false)}
                >
                    <XIcon />
                </Button>
                <img
                    src={'https://mineskin.eu/helm/' + auth.user.name}
                    className={'mx-auto size-32 rounded-full'}
                    alt={'Photo de profil'}
                />
                <nav className={'mt-5'}>
                    <ul>
                        {menuItem.map((menu, id) => (
                            <li key={id}>
                                <Link href={menu.href}>{menu.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MenuMobile;
