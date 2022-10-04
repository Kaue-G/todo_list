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

export const FooterSideBar = styled.footer`
    width: 100%;
    height: 60px;

    background-color: ${(props) => props.theme['secondary']};
`;