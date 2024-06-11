import { useEffect, useState } from "react";
import { Platform, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeArea } from "./styles";

type AppTemplateType = {
    children: JSX.Element;
}

const AppTemplate = ({ children }: AppTemplateType) => {
    return (
        <SafeArea>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar
                    translucent
                    barStyle={'dark-content'}
                    backgroundColor={'transparent'}
                />
                {children}
            </GestureHandlerRootView>
        </SafeArea>
    );
}

export default AppTemplate;