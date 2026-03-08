import { Form, usePage } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import password from '@/routes/password';

const ForgotPassword = () => {
    const {flash} = usePage().props;

    useEffect(() => {
        if (flash.status == null) return;
        toast(flash.status)
    }, [flash.status])

    return (
        <div className={'flex min-h-screen bg-font items-center justify-center'}>
            <Toaster position="top-center"/>
            <Card className="min-w-150">
                <CardContent>
                    <Form {...password.email.form()}>
                        {({ errors, processing }) => (
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="email">Votre adresse mail</Label>
                                    <Input
                                        type={"email"}
                                        id={'email'}
                                        name={'email'}
                                    />
                                    <InputError message={errors.email} />
                                </div>
                                <Button disabled={processing}>
                                    Réinitialiser le mot de passe {processing && <LoaderCircleIcon className="animate-spin"/>}
                                </Button>
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
