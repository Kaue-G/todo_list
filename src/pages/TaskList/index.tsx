import { MdList } from "react-icons/md";
import { HeaderPage } from "../../components/HeaderPage";
import { PageDefault } from "../../components/PageDefault";

export function TaskList () {
    function newList() {
        console.log("oi");
    }
    
    return (
        <PageDefault>
            <HeaderPage
                tittle="listas"
                description="Página de gerenciamento das listas"
                createNew={newList}
            >
                <MdList size={25} />
            </HeaderPage>
        </PageDefault>
    );
}