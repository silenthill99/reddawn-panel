import { Form, Head, usePage } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Toaster } from '@/components/ui/sonner';

const Login = () => {
    const {flash} = usePage().props;
    useEffect(function() {
        if (flash.status == null) return;
        toast.success(flash.status)
    }, [flash.status])
    return (
        <div
            className={'flex min-h-screen items-center justify-center bg-font'}
        >
            <Toaster position={'top-center'} />
            <Head title={'Se connecter'} />
            <Card className="min-w-150">
                <CardHeader>
                    <CardTitle>Se connecter</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form
                        {...AuthenticatedSessionController.store.form()}
                        resetOnError={['password']}
                    >
                        {({ errors, processing }) => (
                            <div className={'space-y-4'}>
                                <div>
                                    <Label htmlFor="email">Adresse mail</Label>
                                    <Input
                                        type={'email'}
                                        id={'email'}
                                        name={'email'}
                                        placeholder={'Email'}
                                    />
                                    <InputError message={errors.email} />
                                </div>
                                <div>
                                    <Label htmlFor={'password'}>
                                        Mot de passe
                                    </Label>
                                    <Input
                                        type={'password'}
                                        id={'password'}
                                        name={'password'}
                                        placeholder={'Mot de passe'}
                                    />
                                    <InputError message={errors.password} />
                                </div>
                                <Button disabled={processing}>
                                    Se connecter{' '}
                                    {processing && (
                                        <LoaderCircleIcon className="animate-spin" />
                                    )}
                                </Button>
                                <InputError message={errors.failure} />
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
