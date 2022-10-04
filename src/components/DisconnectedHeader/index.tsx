import { Button, Header, Logo } from "./styles";
import logoTodo from "../../assets/logoTodo.png";
import nomeTodo from "../../assets/nomeTodo.png";
import { Link } from "react-router-dom";

interface IDisconnectedHeaderProps {
    buttonText: string;
    buttonLink: string;
}

export function DisconnectedHeader({ buttonText, buttonLink }: IDisconnectedHeaderProps) {
    return (
        <Header>
            <Logo>
                <img src={logoTodo} alt="" />
                <img src={nomeTodo} alt="" />
            </Logo>
            <Button>
                <Link to={buttonLink}>
                    <button>{buttonText}</button>
                </Link>
            </Button>
        </Header>
    );
};