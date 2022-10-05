import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme['primary']};
    color: ${(props) => props.theme['white']};
`;

export const HeaderSideBar = styled.header`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SandwichMenu = styled.div``;

export const MenuSideBar = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MenuItem = styled.button`
    width: 216px;
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 15px;

    background: transparent;
    border: none;
    border-radius: 10px;

    text-transform: capitalize;
    color: ${(props) => props.theme['white']}; ;

    background-color: blueviolet;

`;

export const FooterSideBar = styled.footer`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['secondary']};
`;