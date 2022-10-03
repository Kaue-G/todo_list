import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
