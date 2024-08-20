import { createContext, useState } from "react";
import { UserContextType, UserType } from "./types";
import { ChildrenType } from "../utils/global/types";

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

export const UserProvider = ({ children }: ChildrenType) => {
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