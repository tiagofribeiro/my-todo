import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackType } from "./types";
import AuthStack from "./auth";
import MenuStack from "./menu";
import { WHITE_PALACE } from "../utils/global/colors";

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
    return (
        <NavigationContainer theme={theme}>
            <Root.Navigator
                initialRouteName={'Auth'}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Root.Screen name={'Auth'} component={AuthStack} />
                <Root.Screen name={'Menu'} component={MenuStack} />
            </Root.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;