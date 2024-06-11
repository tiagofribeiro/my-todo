import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackType } from "./types";
import AuthStack from "./auth";

const Root = createNativeStackNavigator<RootStackType>();

const RootStack = () => {
    return (
        <Root.Navigator
            initialRouteName={'Auth'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Root.Screen name={'Auth'} component={AuthStack} />
        </Root.Navigator>
    );
}

export default RootStack;