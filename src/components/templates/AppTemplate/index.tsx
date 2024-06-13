import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeArea } from "./styles";
import { AppProvider } from "../../../context/app";
import { ChildrenType } from "../../../utils/global/types";

const AppTemplate = ({ children }: ChildrenType) => {
    return (
        <SafeArea>
            <AppProvider>
                <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'transparent' }}>
                    {children}
                </GestureHandlerRootView>
            </AppProvider>
        </SafeArea>
    );
}

export default AppTemplate;