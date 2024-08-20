import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackType } from "./types";
import AuthStack from "./auth";
import MenuStack from "./menu";
import { WHITE_PALACE } from "../utils/global/colors";
import { useAppContext } from "../context/app";

const Root = createNativeStackNavigator<RootStackType>();

const theme = {
    dark: false,
    colors: {
        primary: 'transparent',
        background: WHITE_PALACE.lighter,
        card: 'transparent',
        text: 'transparent',
        border: 'transparent',
        notification: 'transparent',
    }
}

const RootStack = () => {
    const { isAuthenticated } = useAppContext();

    return (
        <NavigationContainer theme={theme}>
            <Root.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}
            >
                {
                    !isAuthenticated
                        ? <Root.Screen name={'Auth'} component={AuthStack} />
                        : <Root.Screen name={'Menu'} component={MenuStack} />
                }
            </Root.Navigator>
        </NavigationContainer >
    );
}

export default RootStack;