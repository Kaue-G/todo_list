import { Header } from "./styles";
import logoTodo from "../../assets/logoTodo.png";
import nomeTodo from "../../assets/nomeTodo.png";

export function DiscoonectedHeader() {
    return (
        <Header>
            <div>
                <img src={logoTodo} alt="" />
                <img src={nomeTodo} alt="" />
            </div>
            <div>
                <h4>Fala</h4>
            </div>
        </Header>
    );
};