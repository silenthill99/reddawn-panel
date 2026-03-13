import { Form, Head, usePage } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';
import React from 'react';
import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent, SelectGroup,
    SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select';
import type { Role } from '@/types';

const Register = () => {
    const {roles} = usePage<{roles: Role[]}>().props
    return (
        <div
            className={'flex min-h-screen items-center justify-center bg-font'}
        >
            <Head title={'Créer un compte'} />
            <Card className="min-w-150">
                <CardHeader>
                    <CardTitle>Créer un compte</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...RegisteredUserController.store.form()}>
                        {({ errors, processing }) => (
                            <div className={'space-y-4'}>
                                <div>
                                    <Label htmlFor="email">Adresse mail</Label>
                                    <Input
                                        type={'email'}
                                        id={'email'}
                                        name={'email'}
                                        placeholder={'Adresse mail'}
                                    />
                                    <InputError message={errors.email} />
                                </div>
                                <div>
                                    <Label htmlFor="email_confirmation">
                                        Confirmez votre adresse mail
                                    </Label>
                                    <Input
                                        type="email"
                                        name={'email_confirmation'}
                                        id={'email_confirmation'}
                                        placeholder="Confirmez votre adresse mail"
                                    />
                                    <InputError
                                        message={errors.email_confirmation}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="name">
                                        Votre pseudo Minecraft
                                    </Label>
                                    <Input
                                        name={'name'}
                                        id={'name'}
                                        placeholder={'Notch'}
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                <div>
                                    <Label htmlFor="role">
                                        Choisissez le rôle
                                    </Label>
                                    <Select name={"role"}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={"Choisissez un rôle"}/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {roles.map((role) => (
                                                    <SelectItem
                                                        key={role.id}
                                                        value={role.level}
                                                    >
                                                        {role.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.role} />
                                </div>
                                <Button disabled={processing}>
                                    Créer un compte{' '}
                                    {processing && (
                                        <LoaderCircleIcon className="animate-spin" />
                                    )}
                                </Button>
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
