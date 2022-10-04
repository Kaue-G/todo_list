import { useForm } from "react-hook-form";
import { BaseInput, ButtonSubmit, FormContainer } from "./styles";

export function RegistrationForm() {
    const { register, watch } = useForm();

    async function handleSubmit() {}
    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>autenticação</h1>
                </div>

                <span>nome</span>
                <BaseInput type="password" {...register('name')} />
                <span>email</span>
                <BaseInput {...register('email')} />

                <span>senha</span>
                <BaseInput type="password" {...register('password')} />
                <span>confirmação de senha</span>
                <BaseInput type="password" {...register('passwordConfirmation')} />

                <ButtonSubmit type="submit">
                    cadastro
                </ButtonSubmit>
            </form>
        </FormContainer>
    );
}