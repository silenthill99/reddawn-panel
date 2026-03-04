import { Form, Head } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';
import React from 'react';
import { store } from '@/actions/App/Http/Controllers/Auth/CreatePasswordController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CreatePasswordProps {
    token: string;
    email: string;
}

const CreatePassword = ({ token, email }: CreatePasswordProps) => {
    return (
        <div className={'flex min-h-screen items-center justify-center bg-font'}>
            <Head title={'Créer votre mot de passe'} />
            <Card className="min-w-150">
                <CardHeader>
                    <CardTitle>Créer votre mot de passe</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...store.form()}>
                        {({ errors, processing }) => (
                            <div className={'space-y-4'}>
                                <input type="hidden" name="token" value={token} />
                                <input type="hidden" name="email" value={email} />
                                <div>
                                    <Label htmlFor="password">Mot de passe</Label>
                                    <Input
                                        type={'password'}
                                        id={'password'}
                                        name={'password'}
                                        placeholder={'Mot de passe'}
                                    />
                                    <InputError message={errors.password} />
                                </div>
                                <div>
                                    <Label htmlFor="password_confirmation">
                                        Confirmez le mot de passe
                                    </Label>
                                    <Input
                                        type={'password'}
                                        id={'password_confirmation'}
                                        name={'password_confirmation'}
                                        placeholder={'Confirmez le mot de passe'}
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>
                                <Button disabled={processing}>
                                    Créer mon mot de passe{' '}
                                    {processing && <LoaderCircleIcon className="animate-spin" />}
                                </Button>
                                <InputError message={errors.email} />
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreatePassword;