import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackType } from "./types";
import LoginView from "../screens/auth/LoginView";
import RegisterView from "../screens/auth/RegisterView";
import ForgotPasswordView from "../screens/auth/ForgotPasswordView";
import ConfirmationView from "../screens/auth/ConfirmationView";

const Auth = createNativeStackNavigator<AuthStackType>();

const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName={'Login'}
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Auth.Screen name={'Login'} component={LoginView} />
            <Auth.Screen name={'Register'} component={RegisterView} />
            <Auth.Screen name={'ForgotPassword'} component={ForgotPasswordView} />
            <Auth.Screen name={'Confirmation'} component={ConfirmationView} />
        </Auth.Navigator>
    );
}

export default AuthStack;