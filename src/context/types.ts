import { Dispatch, ReactNode, SetStateAction } from "react";

type SetStateType<T> = Dispatch<SetStateAction<T>>

//

export type ProviderType = {
    children: ReactNode;
}

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
    drawerY: number;
    setDrawerY: SetStateType<number>;
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