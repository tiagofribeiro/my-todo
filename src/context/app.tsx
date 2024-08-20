// const [statusHeight, setStatusHeight] = useState<number>(20);
// useEffect(() => {
//     if (Platform.OS !== "android") return
//     setStatusHeight(StatusBar.currentHeight ?? 20);
// }, [statusHeight])

import { createContext, useContext, useState } from "react";
import { AppContextType } from "./types";
import { ChildrenType } from "../utils/global/types";

export const AppContext = createContext<AppContextType>({
    isLoading: false,
    setIsLoading: () => { },
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    drawerY: 0,
    setDrawerY: () => { },
    currentInputY: 0,
    setCurrentInputY: () => { },
});

export const AppProvider = ({ children }: ChildrenType) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [drawerY, setDrawerY] = useState(0);
    const [currentInputY, setCurrentInputY] = useState(0);

    const context = {
        isLoading,
        setIsLoading,
        isAuthenticated,
        setIsAuthenticated,
        drawerY,
        setDrawerY,
        currentInputY,
        setCurrentInputY,
    };

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
    //   throw new Error('useCurrentY must be used within a CurrentYProvider');
    }
    
    return context;
  };