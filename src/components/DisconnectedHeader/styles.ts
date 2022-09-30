import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 78px;

    background: ${(props) => props.theme['secondary']};

    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: 35px;
`;

export const Button = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;

    button { 
        height: 16px;
        border: none;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;

        color: ${(props) => props.theme['brand']};
        background: transparent;

        &:hover {
            border-bottom: 1px solid ;
        }
    }
`;