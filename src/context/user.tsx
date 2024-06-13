import { createContext, useState } from "react";
import { ProviderType, UserContextType, UserType } from "./types";

const emptyUser = {
    email: '',
    password: '',
    name: '',
    confirmed: false,
}

export const UserContext = createContext<UserContextType>({
    user: emptyUser,
    setUser: () => { }
})

export const UserProvider = ({ children }: ProviderType) => {
    const [user, setUser] = useState<UserType>(emptyUser);

    const context = {
        user,
        setUser,
    }

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}