import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, SquareArrowRightExitIcon } from 'lucide-react';
import React from 'react';
import {
    Sidebar, SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, home, logout } from '@/routes';

const AppSidebar = () => {

    const {is_admin} = usePage().props;

    const navItems = [
        {
            label: 'Tableau de bord',
            href: dashboard(),
            icon: LayoutDashboard
        },
    ];

    const adminMenuItems = [
        {
            label: "Ajouter un staff"
        }
    ]

    const {url} = usePage();

    const isActive = (link: string) => {
        if (link === "/") {
            return url === "/";
        }
        return url.startsWith(link);
    }

    return (
        <Sidebar variant={"inset"}>
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
                {}
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
                {is_admin && (
                    <SidebarGroup>
                        <SidebarGroupLabel>Partie administration</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {adminMenuItems.map((item, index) => (
                                    <SidebarMenuItem key={index}>
                                        <SidebarMenuButton asChild>
                                            <Link href={''}>
                                                {item.label}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={logout()}>
                                        <SquareArrowRightExitIcon/>
                                        Se déconnecter
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
