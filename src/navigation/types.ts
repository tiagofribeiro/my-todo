/**
 * React Navigation Type check - https://reactnavigation.org/docs/typescript/
 */
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackType = {
    Auth: AuthStackType;
    Menu: MenuStackType;
}

export type AuthStackType = {
    Login: undefined;
    Register: { email: string } | undefined;
    ForgotPassword: { email: string } | undefined;
    Confirmation: { email: string } | undefined;
}

export type MenuStackType = {
    Today: undefined;
    Calendar: undefined;
    Account: undefined;
}

export type AuthStackProps<screen extends keyof AuthStackType> = NativeStackScreenProps<AuthStackType, screen>
export type MenuStackProps<screen extends keyof MenuStackType> = BottomTabScreenProps<MenuStackType, screen>