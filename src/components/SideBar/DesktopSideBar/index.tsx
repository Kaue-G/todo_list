import { FooterSideBar, HeaderSideBar, MenuSideBar, SandwichMenu, SidebarContainer } from "./styles";
import logoTodoWhite from "./../../../assets/logoTodoWhite.svg"
import { useAuth } from "../../../hooks/useAuth";

export function DesktopSidebar () {
    const { signOut } = useAuth();

    return (
        <SidebarContainer>
            <HeaderSideBar>
                <img src={logoTodoWhite} alt="" />
                <SandwichMenu />
            </HeaderSideBar>
            <MenuSideBar>
                <h2>menu 1</h2>
                <h2>menu 2</h2>
            </MenuSideBar>
            <FooterSideBar>
                <h1>Gabriel user</h1>
                <button onClick={signOut}>sair</button>
            </FooterSideBar>
        </SidebarContainer>
    );
}