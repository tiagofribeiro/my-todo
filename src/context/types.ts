import { Dispatch, SetStateAction } from "react";

import { ReminderTypes, TagTypes } from "../utils/global/enums";

type SetStateType<T> = Dispatch<SetStateAction<T>>;

type SubTaskType = Pick<TaskType, 'title' | 'done'>;
type QuickTaskType = Pick<TaskType, 'title' | 'date' | 'done'>;

//

export type UserType = {
    email: string;
    password: string;
    name: string;
    confirmed: boolean;
}

export type TaskType = {
    done: boolean;
    title: string;
    descr?: string;
    date?: Date;
    tag?: TagTypes;
    reminders?: {
        value: number;
        type: ReminderTypes;
    }[],
    subtasks?: SubTaskType[];
}

//

export type AppContextType = {
    isLoading: boolean;
    setIsLoading: SetStateType<boolean>;
    isAuthenticated: boolean;
    setIsAuthenticated: SetStateType<boolean>;
    drawerY: number;
    setDrawerY: SetStateType<number>;
    currentInputY: number;
    setCurrentInputY: SetStateType<number>;
}

export type AuthContextType = {
    email: string;
    setEmail: SetStateType<string>;
    password: string;
    setPassword: SetStateType<string>;
    confirmed: boolean;
    setConfirmed: SetStateType<boolean>;
}

export type UserContextType = {
    user: UserType;
    setUser: SetStateType<UserType>;
}

export type TaskContextType = {
    tasks: TaskType[];
    setTasks: SetStateType<TaskType[]>;
    quickTasks: QuickTaskType[];
    setQuickTasks: SetStateType<QuickTaskType[]>;
}