import styled from "styled-components";

export const CardContainer = styled.div`
    width: 230px;
    height: 112px;
    background-color: ${(props) => props.theme['white']};
    
    padding: 0 13px;
    border-radius: 10px;
    box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StatusTask = styled.h1`
    font-size: 16px;
    font-weight: 500;
    margin-left: 4px;
    margin-bottom: 5px;
`;

export const ContentsTask = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 7px;
    border-top: solid 1px ${(props) => props.theme['background']};

    span {
        display: flex;
        width: 2px;
        height: 32px;
        background: blue;
    }

    div:first-child {
        display: flex;
        gap: 10px;

        h1 {
            font-size: 16px;
            font-weight: 700;
            color: ${(props) => props.theme['textPrimary']};
        }
        p {
            font-size: 10px;
            font-weight: 500;
            color: ${(props) => props.theme['textSecondary']};
        }
    }
`;

export const OptionsBtn = styled.button`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme['textPrimary']};

    background: transparent;
    border: none;
    cursor: pointer;
`;

export const TaskFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 9.5px;
    svg {
        color: ${(props) => props.theme['textSecondary']};
    }
    
    span {
        font-size: 9px;
        font-weight: 700;
        color: ${(props) => props.theme['textPrimary']};
    }
`;