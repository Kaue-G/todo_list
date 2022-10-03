import { useAuth } from "../hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";


export  function Router() {
    const { isAuthenticated } = useAuth();
    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
}