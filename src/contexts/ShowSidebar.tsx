import { createContext, ReactNode, useContext, useState } from "react";

interface IShowSideBarProviderProps {
    children: ReactNode;
};

interface IShowSideBarData {
    showMenu: boolean;
    showSideBar(): void;
};

const ShowSideBarContext = createContext<IShowSideBarData>({} as IShowSideBarData);

export function ShowSideBarProvider({ children }: IShowSideBarProviderProps) {
    const [showMenu, setShowMenu] = useState(true);

    function showSideBar() {
        setShowMenu(prevState => !prevState);
    };

    return (
        <ShowSideBarContext.Provider value={{ showMenu, showSideBar }}>
            {children}
        </ShowSideBarContext.Provider>
    );
}

export function useShowSideBar() {
    const context = useContext(ShowSideBarContext);

    return context;
}