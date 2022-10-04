import { DisconnectedHeader } from "../../components/DisconnectedHeader";
import { LoginForm } from "./pageComponents/LoginForm";
import { LoginContainer } from "./styles";

export function Login() {
    return (
        <LoginContainer>
            <DisconnectedHeader buttonText="Não possui uma conta?" buttonLink="/registration"/>
            <LoginForm />
        </LoginContainer>
    );
}