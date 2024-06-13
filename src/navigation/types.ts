/**
 * React Navigation Type check - https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackType = {
    Auth: AuthStackType;
}

export type AuthStackType = {
    Login: undefined;
    Register: { email: string } | undefined;
    ForgotPassword: { email: string } | undefined;
    Confirmation: { email: string } | undefined;
}

export type AuthStackProps<screen extends keyof AuthStackType> = NativeStackScreenProps<AuthStackType, screen>