import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import { BaseInput, ButtonSubmit, FormContainer } from "./styles";

export function LoginForm() {
    const { register, watch } = useForm();
    const { signIn, loading, changeLoading } = useAuth();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        // changeLoading(true);

        const messageResponse = await signIn({
            email: watch('email'),
            password: watch('password'),
        });
        console.log(messageResponse);

        if (messageResponse !== undefined) {
            toast.error(messageResponse[0], {
                position: 'top-left',
            });
        } else {
            toast.dismiss();
        }

        // changeLoading(false);
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>autenticação</h1>
                </div>
                <span>email</span>
                <BaseInput {...register('email')} />
                <span>password</span>
                <BaseInput type="password" {...register('password')} />
                <ButtonSubmit type="submit">
                    entrar
                </ButtonSubmit>
            </form>
        </FormContainer>
    );
}