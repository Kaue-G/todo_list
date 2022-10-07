import { MdInbox } from "react-icons/md";
import { HeaderPage } from "../../components/HeaderPage";
import { PageDefault } from "../../components/PageDefault";

export function Home() {

    function newTask () {
        console.log("oi");
    }

    return (
        <>
            <PageDefault>
                <HeaderPage 
                    tittle="tarefas" 
                    description="Página de gerenciamento das tarefas"
                    createNew={ newTask }
                >
                    <MdInbox size={25} />
                </HeaderPage>
            </PageDefault>
        </>
    );
}