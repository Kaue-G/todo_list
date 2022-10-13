import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";

interface ITask {
    id: string;
    description: string;
    assignmentListId: string;
    deadline: string;
    concluded: boolean;
    concludedAt: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    assignmentList: {
        id: string;
        name: string;
        assignments: [
            string
        ]
    }
}

interface ITaskContextType {
    tasks: ITask[];
    loadTasks(): void;
}

interface ITasksContextProviderProps {
    children: ReactNode;
}

export const TasksContext = createContext({} as ITaskContextType);

export function TasksContextProvider({ children }: ITasksContextProviderProps) {
    const { user } = useAuth();
    const [tasks, setTasks] = useState<ITask[]>([]);

    async function loadTasks() {
        const responseTasks = await api.get(`Assigments/${user.id}`);

        setTasks(responseTasks.data);

        console.log(responseTasks);

    }

    return (
        <TasksContext.Provider
            value={{
                tasks,
                loadTasks,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
}