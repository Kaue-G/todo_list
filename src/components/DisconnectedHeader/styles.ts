import styled from "styled-components";

export const Header = styled.header`
    background: ${(props) => props.theme['secondary']};

    display: flex;
    justify-content: space-between;
`;