import { Button, Header, Logo } from "./styles";
import logoTodo from "../../assets/logoTodo.png";
import nomeTodo from "../../assets/nomeTodo.png";

interface IDisconnectedHeaderProps {
    buttonText: string;
}

export function DisconnectedHeader({ buttonText }: IDisconnectedHeaderProps) {
    return (
        <Header>
            <Logo>
                <img src={logoTodo} alt="" />
                <img src={nomeTodo} alt="" />
            </Logo>
            <Button>
                <button>{buttonText}</button>
            </Button>
        </Header>
    );
};