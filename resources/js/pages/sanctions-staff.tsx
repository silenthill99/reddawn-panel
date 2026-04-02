import { Head, usePage } from '@inertiajs/react';
import React from 'react';
import PaginatedCollection from '@/components/PaginatedCollection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table, TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import PageLayout from '@/layouts/page-layout';
import type { PaginatedProps, Sanction } from '@/types';

const SanctionsStaff = () => {
    const {sanctions} = usePage<{sanctions: PaginatedProps<Sanction>}>().props
    console.log(sanctions.data.length)
    return (
        <PageLayout>
            <Head title={'Erreurs staff'} />
            {/*{sanctions.length}*/}
            <Card
                className={'absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 max-h-200 overflow-y-auto'}
            >
                <CardHeader>
                    <CardTitle>Erreurs staff</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Pseudo</TableHead>
                                <TableHead>Emis par</TableHead>
                                <TableHead>Type de sanction</TableHead>
                                <TableHead>Raison</TableHead>
                                <TableHead>Durée</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sanctions.data.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell>{item.pseudo}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <PaginatedCollection paginatedLinks={sanctions}/>
                </CardContent>
            </Card>
        </PageLayout>
    );
};

export default SanctionsStaff
