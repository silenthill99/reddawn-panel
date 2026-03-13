import type { PropsWithChildren } from 'react';
import React from 'react';
import AppSidebar from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const SidebarLayout = ({children}: PropsWithChildren) => {

    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <SidebarTrigger/>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default SidebarLayout;
