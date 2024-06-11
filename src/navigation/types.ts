/**
 * React Navigation Type check - https://reactnavigation.org/docs/typescript/
 */

export type RootStackType = {
    Auth: AuthStackType;
}

export type AuthStackType = {
    Login: undefined;
    Register: { email: string } | undefined;
    ForgotPassword: { email: string } | undefined;
    Confirmation: { email: string } | undefined;
}