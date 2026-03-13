import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SidebarLayout from '@/layouts/sidebar-layout';
import { logout } from '@/routes';
import type { Sanction } from '@/types';

const Dashboard = () => {
    const {sanctions} = usePage<{sanctions: Sanction[]}>().props
    return (
        <SidebarLayout>
            <h1>Page d'accueil</h1>
            <Separator/>
            <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-5"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Nombre de sanctions émises : </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{sanctions.length}</p>
                    </CardContent>
                </Card>
            </div>
            <Link href={logout()}>Se déconnecter</Link>
        </SidebarLayout>
    );
};

export default Dashboard;
