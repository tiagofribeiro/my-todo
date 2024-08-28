import { createContext, useState } from "react";

import { TaskContextType } from "./types";

import { ChildrenType } from "../utils/global/types";

const emptyTask = {
    done: false,
    title: ''
}

export const TaskContext = createContext<TaskContextType>({
    tasks: [emptyTask],
    setTasks: () => { },
    quickTasks: [emptyTask],
    setQuickTasks: () => { },
})

export const TaskProvider = ({ children }: ChildrenType) => {
    const [tasks, setTasks] = useState([emptyTask]);
    const [quickTasks, setQuickTasks] = useState([emptyTask]);

    const context = {
        tasks,
        setTasks,
        quickTasks,
        setQuickTasks,
    }

    return (
        <TaskContext.Provider value={context}>
            {children}
        </TaskContext.Provider>
    )
}