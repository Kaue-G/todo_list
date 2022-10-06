import { FooterSideBar, HeaderSideBar, MenuItem, MenuSideBar, SandwichMenu, SidebarContainer, UserName } from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import logoTodoWhite from "./../../../assets/logoTodoWhite.svg"
import { MdList, MdInbox } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useShowSideBar } from "../../../hooks/showSidebar";

export function DesktopSidebar() {
    const { user, signOut } = useAuth();
    const { showMenu, showSideBar } = useShowSideBar();
    
    return (
        <SidebarContainer className={showMenu ? "show-menu": ""}>
            <HeaderSideBar>
                <img src={logoTodoWhite} alt="" />
                <SandwichMenu onClick={showSideBar}>
                    <div className="line" id="line1"></div>
                    <div className="line" id="line2"></div>
                    <div className="line" id="line3"></div>
                </SandwichMenu>
            </HeaderSideBar>
            <MenuSideBar className={showMenu ? "show-menu" : ""}>
                <MenuItem>
                    <NavLink to={"/home"}>
                        <MdInbox size={25} />
                        {showMenu ? "tarefas" : ""}
                    </NavLink>
                </MenuItem>
                <MenuItem> 
                    <NavLink to={"/tarefas"}>
                        <MdList size={25} />
                        {showMenu ? "listas" : ""}
                    </NavLink>
                </MenuItem>
            </MenuSideBar>
            <FooterSideBar>
                
                {showMenu ? <>
                    <BiUserCircle size={30} />
                    <UserName>
                        <h1>{user.name}</h1>
                        <span>usuário</span>
                    </UserName>
                </>
                : ""}
                
                <button onClick={signOut}>
                    <FiLogOut size={25}/>
                </button>
            </FooterSideBar>
        </SidebarContainer>
    );
}