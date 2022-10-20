import { CardContainer, ContentsTask, OptionsBtn, StatusTask, TaskFooter } from "./styles";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

export function CardTask() {
    return (
        <CardContainer>
            <StatusTask>
                Status
            </StatusTask>
            <ContentsTask>
                <div>
                    <span />
                    <div className="TittleAndDescription">
                        <h1>Titulo task</h1>
                        <p>Descrição task</p>
                    </div>
                </div>
                <div>
                    <OptionsBtn>
                        <BsThreeDotsVertical size={"10px"} />
                    </OptionsBtn>
                </div>
            </ContentsTask>
            <TaskFooter>
                <AiOutlineUnorderedList />
                <span>tarefas</span>
                <BiTimeFive />
                <span>00 de mes, 00:00</span>
            </TaskFooter>
        </CardContainer>
    );
};