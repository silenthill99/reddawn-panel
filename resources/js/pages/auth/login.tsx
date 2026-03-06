import { Form, Head, Link, usePage } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from '@/components/ui/checkbox';
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
            <Card className="lg:min-w-150">
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
                                <div className={"block lg:flex justify-between"}>
                                    <div className={'flex items-center gap-2'}>
                                        <Checkbox
                                            id={'remember'}
                                            name={'remember'}
                                        />
                                        <Label htmlFor={'remember'}>
                                            Se souvenir de moi
                                        </Label>
                                    </div>
                                    <Link className={"text-cyan-600"} href={""}>Mot de passe oublié</Link>
                                </div>
                                <Button disabled={processing} className="mt-20">
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
