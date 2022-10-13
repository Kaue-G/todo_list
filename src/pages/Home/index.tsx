import { MdInbox } from "react-icons/md";
import { HeaderPage } from "../../components/HeaderPage";
import { PageDefault } from "../../components/PageDefault";
import { CardTask } from "./pageComponentes/CardTask/intex";
import { Tasks, TasksContainer } from "./styles";

export function Home() {

    function newTask() {
        console.log("oi");
    }

    return (
        <PageDefault>
            <TasksContainer>
                <HeaderPage
                    tittle="tarefas"
                    description="Página de gerenciamento das tarefas"
                    createNew={newTask}
                >
                    <MdInbox size={25} />
                </HeaderPage>
                <Tasks>
                    <CardTask />
                    <CardTask />
                    <CardTask />
                    <CardTask />
                    <CardTask />
                    <CardTask />
                    <CardTask />
                </Tasks>
            </TasksContainer>
        </PageDefault>
    );
}