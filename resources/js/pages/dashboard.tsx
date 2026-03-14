import { usePage } from '@inertiajs/react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SidebarLayout from '@/layouts/sidebar-layout';
import type { Sanction } from '@/types';

const Dashboard = () => {
    const {auth, sanctions} = usePage<{sanctions: Sanction[]}>().props
    return (
        <SidebarLayout title={'Tableau de bord'}>
            <div className={'m-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3'}>
                <Card>
                    <CardHeader>
                        <CardTitle>Nombre de sanctions émises : </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{sanctions.length}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Rôle</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{auth.user.role.label}</p>
                    </CardContent>
                </Card>
            </div>
        </SidebarLayout>
    );
};

export default Dashboard;
