import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 70px;
    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme['primary']};
    color: ${(props) => props.theme['white']};
    transition: all 1.5s;

    &.show-menu{
        width: 250px;

        display: flex;
        align-items: center;
        flex-direction: column;

        header {
            width: 216px;
            justify-content: center;
            gap: 100px;

            img {
                width: 85px;
                opacity: 1;
                transition: all 1.5s;
            }
        }
    }
`;

export const HeaderSideBar = styled.header`
    width: 100%;
    height: 70px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1.5s;

    img {
        width: 0;
        opacity: 0;
        transition: all 1.5s;
    }
`;

export const SandwichMenu = styled.div`
    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    cursor: pointer;

    transition: all 2s;

   div {
     &.line {
        width: 100%;
        height: 2px;
        background-color: #ffffff;

        box-shadow: 0.1rem 0.1rem 1px #000;

        transition: all 1.5s;
    }
   }
`;

export const MenuSideBar = styled.nav`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    &.show-menu button {
        width: 216px;

        a {
            justify-content: start;
            padding-left: 15px;
        }
    }
`;

export const UserName = styled.div`
    width: 140px;
`;

export const MenuItem = styled.button`
    width: 45px;
    height: 45px;
    display: flex;
    

    background: transparent;
    border: none;

    text-transform: capitalize;
    transition: all 1.5s;

    a {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: ${(props) => props.theme['white']};
        text-decoration: none;

        &.active {
            background-color: ${(props) => props.theme['white']};;
            color: ${(props) => props.theme['primary']};;
        }

        :first-child {
            gap: 5px;
        }
    }

`;

export const FooterSideBar = styled.footer`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.theme['secondary']};

    h1 {
        font-size: 15px;
    }

    span {
        font-size: 12px;
    }
    
    button {
        transform: rotateY(180deg);
        color: ${(props) => props.theme['white']};
        background: transparent;
        cursor: pointer;
        border: none;
    }
`;