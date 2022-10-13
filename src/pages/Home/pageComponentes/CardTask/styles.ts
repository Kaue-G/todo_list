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
    
`;

export const ContentsTask = styled.div`
    
`;

export const TaskFooter = styled.div`
    
`;