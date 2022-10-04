import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ISingInProps {
    email: string;
    password: string;
};

interface IUser {
    id: string;
    name: string;
    email: string;
}

interface ISetLogged {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
}

interface IAuthContextData {
    user: IUser;
    loading: boolean;
    isAuthenticated: boolean;
    signIn({ email, password }: ISingInProps): Promise<string>;
    signOut(): void;
    changeLoading(value: boolean): void;
    setLogged({ token, user }: ISetLogged): void;
};

interface IAuthProviderProps {
    children: ReactNode;
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const STORAGE_TOKEN = "@TodoList:token";
const STORAGE_USER = "@TodoList:user"

export function AuthProvider({ children }: IAuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({} as IUser);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStorageDate() {
            const storageToken = localStorage.getItem(STORAGE_TOKEN);
            const storageUser = localStorage.getItem(STORAGE_USER);

            if (storageToken && storageUser) {
                api.defaults.headers.common.Authorization = `Bearer ${storageToken}`;

                setIsAuthenticated(true);
                setUser(JSON.parse(storageUser));
            }
        }

        loadStorageDate();
    }, []);
    
    async function signIn({ email, password }: ISingInProps) {
        try {
            const response = await api.post("/Auth/login", {
                email,
                password,
            });
            
            setLogged({
                token: response.data.accessToken,
                user: response.data.user,
            });

            setUser(response.data.user);

            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

            return response.data.message;
        } catch (error: any) {
            return error.response.data.erros;
        }
    };

    function setLogged({ token, user }: ISetLogged) {
        localStorage.setItem(STORAGE_TOKEN, token);
        localStorage.setItem(STORAGE_USER, JSON.stringify(user));

        setIsAuthenticated(true);
    }

    function signOut() {
        localStorage.removeItem(STORAGE_TOKEN);
        localStorage.removeItem(STORAGE_USER);
        setUser({} as IUser);
        setIsAuthenticated(false);
    };

    function changeLoading(value: boolean) {
        setLoading(value)
    }

    return (
        <AuthContext.Provider 
            value={{
                user,
                loading,
                isAuthenticated,
                signIn,
                signOut,
                changeLoading,
                setLogged,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
};