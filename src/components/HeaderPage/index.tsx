import { ReactNode } from "react";
import { CreateButton, HeaderContainer, PageDescription, PageIcon } from "./styles";

interface IHeaderPageProps {
    tittle: string;
    description: string;
    children: ReactNode;
    createNew(): void;
};

export function HeaderPage ({ tittle, description, createNew, children}: IHeaderPageProps) {
    return (
        <HeaderContainer>
            <PageIcon>
                {children}
                
            </PageIcon>
            <PageDescription>
                <h1>{tittle}</h1>
                <p>{description}</p>
            </PageDescription>
            <CreateButton onClick={createNew}>
                novo
            </CreateButton>
        </HeaderContainer>
    );
};