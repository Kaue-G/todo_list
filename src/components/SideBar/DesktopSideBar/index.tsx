import { FooterSideBar, HeaderSideBar, MenuItem, MenuSideBar, SandwichMenu, SidebarContainer } from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import logoTodoWhite from "./../../../assets/logoTodoWhite.svg"
import { MdList, MdInbox } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

export function DesktopSidebar() {
    const { signOut } = useAuth();

    return (
        <SidebarContainer>
            <HeaderSideBar>
                <img src={logoTodoWhite} alt="" />
                <SandwichMenu />
            </HeaderSideBar>
            <MenuSideBar>
                <MenuItem>
                    <MdInbox size={20} />
                        tarefas
                </MenuItem>
                <MenuItem> 
                    <MdList color="#202342" size={20} />
                    tarefas
                </MenuItem>
            </MenuSideBar>
            <FooterSideBar>
                <BiUserCircle size={30} />
                <h1>Gabriel user</h1>
                <button onClick={signOut}>sair</button>
            </FooterSideBar>
        </SidebarContainer>
    );
}