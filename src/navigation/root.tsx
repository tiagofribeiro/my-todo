import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackType } from "./types";
import AuthStack from "./auth";

const Root = createNativeStackNavigator<RootStackType>();

const theme = {
    dark: false,
    colors: {
        primary: 'transparent',
        background: '#D8CCC3',
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
            </Root.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;