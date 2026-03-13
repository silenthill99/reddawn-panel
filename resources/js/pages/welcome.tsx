import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import PaginatedCollection from '@/components/PaginatedCollection';
import {
    Card,
    CardContent, CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import PageLayout from '@/layouts/page-layout';
import type { PaginatedProps, Sanction } from '@/types';

export default function Welcome() {
    const page = usePage();
    const {sanctions} = usePage<{sanctions: PaginatedProps<Sanction>}>().props
    useEffect(() => {
        console.log(page)
    }, []);

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
                    'absolute top-1/2 left-1/2 hidden min-w-50 -translate-x-1/2 -translate-y-1/2 lg:flex max-h-200 overflow-y-auto'
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
                        <TableBody>
                            {sanctions.data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.pseudo}</TableCell>
                                    <TableCell>{item.emittedBy.name}</TableCell>
                                    <TableCell>{item.sanction_type}</TableCell>
                                    <TableCell>{item.reason}</TableCell>
                                    <TableCell>{item.duration}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <PaginatedCollection paginatedLinks={sanctions}/>
                </CardFooter>
            </Card>
            <div className={"space-y-5 lg:hidden p-2"}>
                {sanctions.data.map((sanction, item) => (
                    <Card key={item}>
                        <CardHeader>
                            <CardTitle>Pseudo du joueur : {sanction.pseudo}</CardTitle>
                            <CardDescription>Emis par : {sanction.emittedBy.name}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className={"space-y-2 text-sm"}>
                                <li>Type de sanction : {sanction.sanction_type}</li>
                                <li>Raison : {sanction.reason}</li>
                                <li>Durée : {sanction.duration}</li>
                            </ul>
                        </CardContent>
                    </Card>
                ))}
                <div className={"py-5"}>
                    <PaginatedCollection paginatedLinks={sanctions}/>
                </div>
            </div>
        </PageLayout>
    );
}
