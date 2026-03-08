import { Form, usePage } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';
import React from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import password from '@/routes/password';

const ResetPassword = () => {
    const {token, email} = usePage<{token: string, email: string}>().props
    return (
        <div className={"min-h-screen flex items-center justify-center bg-font"}>
            <Card>
                <CardContent>
                    <Form {...password.update.form()}>
                        {({errors, processing}) => (
                            <div className={"space-y-4"}>
                                <InputError message={errors.email}/>
                                <input type={'hidden'} name={'email'} value={email} />
                                <input type={'hidden'} name={'token'} value={token} />
                                <div>
                                    <Label htmlFor="password">Mot de passe</Label>
                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        id="password"
                                    />
                                    <InputError message={errors.password} />
                                </div>
                                <div>
                                    <Label htmlFor="password_confirmation">Confirmez votre mot de passe</Label>
                                    <Input
                                        type={"password"}
                                        name={"password_confirmation"}
                                        id="password_confirmation"
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>
                                <Button disabled={processing}>
                                    Changer le mot de passe {processing && <LoaderCircleIcon className="animate-spin"/>}
                                </Button>
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResetPassword;
