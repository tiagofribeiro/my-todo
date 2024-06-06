import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "../screens/auth/LoginView";
import PasswordView from "../screens/auth/PasswordView";

export type RootStackType = {
    Login: undefined,
    Password?: undefined,
}

const Root = createNativeStackNavigator<RootStackType>();

const RootStack = () => {
    return (
        <Root.Navigator
            initialRouteName={'Login'}
            screenOptions={{ headerShown: false }}
        >
            <Root.Screen name={'Login'} component={LoginView} />
            <Root.Screen name={'Password'} component={PasswordView} />
        </Root.Navigator>
    );
}

export default RootStack;