import { createContext, useState } from "react";
import { AuthContextType } from "./types";
import { ChildrenType } from "../utils/global/types";

export const AuthContext = createContext<AuthContextType>({
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
    confirmed: false,
    setConfirmed: () => { },
})

export const AuthProvider = ({ children }: ChildrenType) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    const context = {
        email,
        setEmail,
        password,
        setPassword,
        confirmed,
        setConfirmed,
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}