import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100vw;
    height: 100%;
    background-color: ${(props) => props.theme["primary"]};

    display: flex;
    justify-content: center;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        color: ${(props) => props.theme['white']};

        div {
            width: 19.75rem;
            border-left: 7px solid ${(props) => props.theme['brand']};
            padding-left: 10px;

            h1 {
                text-transform: capitalize;
                font-size: 22px;
            }
        }

        span {
            width: 19.75rem;
            margin-top: 20px;

            text-transform: capitalize;
            font-weight: 400;
            font-size: 1rem;
        }
    }
`;

export const BaseInput = styled.input`
    width: 19.75rem;
    height: 2.375rem;
    background: transparent;
    border: 1px solid rgba(233, 236, 239, 0.4);
    border-radius: 4px;
`;

export const ButtonSubmit = styled.button`
    background: rgba(39, 196, 152, 0.5);
    width: 19.75rem;
    height: 2.625rem;
    
    color: ${(props) => props.theme['white']};    

    margin-top: 30px;
    border-radius: 4px;
    border: none;

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme['success']};
    }
`;