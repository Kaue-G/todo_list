import { DisconnectedHeader } from "../../components/DisconnectedHeader";
import { RegistrationForm } from "./pageComponents/RegistrationForm";
import { RegistrationContainer } from "./styles";

export function Registration() {
    return (
        <RegistrationContainer>
            <DisconnectedHeader buttonText="Já possui uma conta?" buttonLink="/login" />
            <RegistrationForm />
        </RegistrationContainer>
    );
}