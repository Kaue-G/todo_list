import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import { api } from "../../../../services/api";
import { BaseInput, ButtonSubmit, FormContainer } from "./styles";

interface IRegistrationUser {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export function RegistrationForm() {
    const { setLogged } = useAuth();
    const { register, watch } = useForm();
    const navigate = useNavigate();

    async function Registration ({
        name,
        email,
        password,
        passwordConfirmation
    }: IRegistrationUser) {
        if (password !== passwordConfirmation) {
            toast.error("Senhas divergem entre si!!", {
                position: "top-left",
            })
        } else {
            try {
                const response = await api.post("/Auth/register", {
                    name,
                    email,
                    password,
                    passwordConfirm: passwordConfirmation,
                });

                setLogged({
                    token: response.data.accesssToken,
                    user: response.data.user,
                });

                toast.success("Cadastrado com sucesso", {
                    position: "top-left"
                });

                
                navigate("/home");
            } catch (error: any) {
                toast.error(error.response.data.erros[0], {
                    position: "top-left"
                })
            }
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await Registration({
            name: watch("name"),
            email: watch("email"),
            password: watch("password"),
            passwordConfirmation: watch("passwordConfirmation"),
        })
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>nova conta</h1>
                </div>

                <span>nome</span>
                <BaseInput type="text" {...register('name')} />
                <span>email</span>
                <BaseInput  type="email" {...register('email')} />

                <span>senha</span>
                <BaseInput type="password" {...register('password')} />
                <span>confirmação de senha</span>
                <BaseInput type="password" {...register('passwordConfirmation')} />

                <ButtonSubmit type="submit">
                    Cadastrar-se
                </ButtonSubmit>
            </form>
        </FormContainer>
    );
}