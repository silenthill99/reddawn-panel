import type { PropsWithChildren } from 'react';
import React from 'react';

const PageLayout = ({children}: PropsWithChildren) => {
    return (
        <div className="min-h-screen bg-font">
            <div
                className={
                    'fixed top-0 left-20 z-50 flex h-screen w-89 flex-col bg-black/50 p-5'
                }
            >
                <img
                    src={'https://mineskin.eu/helm/Florian002'}
                    className={'mx-auto size-58 rounded-full bg-white'}
                    alt={'Photo de profil'}
                />
            </div>
            <div className={'relative ml-auto h-screen w-5xl'}>
                <img
                    src="/images/logo-reddawn.png"
                    alt=""
                    className={'h-full blur-sm'}
                />
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
