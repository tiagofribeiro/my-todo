import { Dispatch, SetStateAction } from "react";

type SetStateType<T> = Dispatch<SetStateAction<T>>

//

export type UserType = {
    email: string;
    password: string;
    name: string;
    confirmed: boolean;
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
    user: UserType,
    setUser: SetStateType<UserType>;
}