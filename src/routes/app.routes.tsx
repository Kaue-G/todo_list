import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { TaskList } from "../pages/TaskList";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/tarefas" element={<TaskList />} />



            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};
