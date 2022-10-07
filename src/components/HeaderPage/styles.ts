import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.3125rem;
    padding: 0 1.75rem;

    display: flex;
    align-items: center;
`;

export const PageIcon = styled.div`
    min-width: 3.3125rem;
    height: 3.3125rem;
    margin-right: 10px;
    background-color: ${(props) => props.theme['white']};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageDescription = styled.div`
    width: 100%;
    color: ${(props) => props.theme['primary']};

    h1 {
        text-transform: capitalize;
        font-weight: 600;
        font-size: 20px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
    }
`;

export const CreateButton = styled.button`
    width: 100px;
    height: 37px;
    border: none;
    border-radius: 4px;

    background-color: ${(props) => props.theme['primary']};
    color: ${(props) => props.theme['white']};
    text-transform: capitalize;
    font-size: 16px;
    cursor: pointer;
`;
