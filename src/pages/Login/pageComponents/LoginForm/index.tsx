import { BaseInput, ButtonSubmit, Formcontainer } from "./styles";

export function LoginForm() {
    return (
        <Formcontainer>
            <div>
                <h1>autenticação</h1>
            </div>
            <span>email</span>
            <BaseInput />
            <span>password</span>
            <BaseInput />
            <ButtonSubmit>
                entrar
            </ButtonSubmit>
        </Formcontainer>
    );
}