import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import { BaseInput, ButtonSubmit, FormContainer } from "./styles";

export function LoginForm() {
    const { register, watch } = useForm();
    const { signIn, loading, changeLoading } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        changeLoading(true);

        const messageResponse = await signIn({
            email: watch('email'),
            password: watch('password'),
        });

        if (messageResponse !== undefined) {
            toast.error(messageResponse[0], {
                position: 'top-left',
            });
        } else {
            toast.dismiss();
        }

        changeLoading(false);
        navigate("/home");
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
                    {!loading ? "entrar" : <div id="loader" />}
                </ButtonSubmit>
            </form>
        </FormContainer>
    );
}