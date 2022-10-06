import { ReactNode, useState } from "react";
import { DesktopSidebar } from "../SideBar/DesktopSideBar";
import { PageContainer } from "./styles";

interface IPageDefault {
    children: ReactNode
}
export function PageDefault({ children }: IPageDefault) {
    

    return (
        <PageContainer>
            <DesktopSidebar />
            {children}
        </PageContainer>
    );
};