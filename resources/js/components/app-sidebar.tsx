import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard } from 'lucide-react';
import React from 'react';
import {
    Sidebar, SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, home } from '@/routes';

const AppSidebar = () => {

    const navItems = [
        {
            label: 'Tableau de bord',
            href: dashboard(),
            icon: LayoutDashboard
        },
    ];

    const {url} = usePage();

    const isActive = (link: string) => {
        if (link === "/") {
            return url === "/";
        }
        return url.startsWith(link);
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={home()} className={"font-bold"}>Reddawn Panel</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive(item.href.url)}
                                    >
                                        <Link href={item.href}>
                                            {item.icon && <item.icon />}
                                            {item.label}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;
