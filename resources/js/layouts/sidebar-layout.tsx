import type { PropsWithChildren } from 'react';
import React from 'react';
import AppSidebar from '@/components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

type Props = PropsWithChildren<{
    title: string;
}>

const SidebarLayout = ({title, children}: Props) => {

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SidebarTrigger />
                <h1 className={"p-5"}>{title}</h1>
                <Separator />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default SidebarLayout;
