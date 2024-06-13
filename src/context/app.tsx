// const [statusHeight, setStatusHeight] = useState<number>(20);
// useEffect(() => {
//     if (Platform.OS !== "android") return
//     setStatusHeight(StatusBar.currentHeight ?? 20);
// }, [statusHeight])

import { createContext, useState } from "react";
import { AppContextType, ProviderType } from "./types";

export const AppContext = createContext<AppContextType>({
    isLoading: false,
    setIsLoading: () => { },
    drawerY: 0,
    setDrawerY: () => { },
});

export const AppProvider = ({ children }: ProviderType) => {
    const [isLoading, setIsLoading] = useState(false);
    const [drawerY, setDrawerY] = useState(0);

    const context = {
        isLoading,
        setIsLoading,
        drawerY,
        setDrawerY,
    };

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
};