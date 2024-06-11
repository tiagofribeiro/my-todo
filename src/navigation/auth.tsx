import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackType } from "./types";
import LoginView from "../screens/auth/LoginView";
import RegisterView from "../screens/auth/RegisterView";

const Auth = createNativeStackNavigator<AuthStackType>();

const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName={'Login'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Auth.Screen name={'Login'} component={LoginView} />
            <Auth.Screen name={'Register'} component={RegisterView} />
        </Auth.Navigator>
    );
}

export default AuthStack;