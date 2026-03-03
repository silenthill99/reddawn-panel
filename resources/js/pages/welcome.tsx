import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import PageLayout from '@/layouts/page-layout';

export default function Welcome() {
    return (
        <PageLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <Card
                className={
                    'absolute top-1/2 left-1/2 min-w-50 -translate-x-1/2 -translate-y-1/2'
                }
            >
                <CardHeader>
                    <CardTitle>Liste des sanctions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Pseudo</TableHead>
                                <TableHead>Emis par</TableHead>
                                <TableHead>Type de sanctions</TableHead>
                                <TableHead>Raison</TableHead>
                                <TableHead>Durée</TableHead>
                            </TableRow>
                        </TableHeader>
                    </Table>
                </CardContent>
            </Card>
        </PageLayout>
    );
}
