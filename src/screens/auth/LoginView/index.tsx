import { useRef, useState } from "react";
import { StatusBar } from "react-native";

import Area from "../../../components/atoms/Area";
import Drawer from "../../../components/atoms/Drawer";
import AuthTemplate from "../../../components/templates/AuthTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { useAppContext } from "../../../context/app";
import { TransitionLeftAnimation, TransitionRightAnimation } from "../../../utils/global/animations";

const LoginView = ({ navigation }: AuthStackProps<'Login'>) => {
    const { setDrawerY } = useAppContext();
    const drawerRef = useRef<AtomDrawerRef>(null);

    const [validEmail, setValidEmail] = useState(false);

    const handleContinue = () => {
        setValidEmail(true);
    };

    const handleBack = () => {
        setValidEmail(false);
    }

    const handleFinish = () => {
        setDrawerY(drawerRef.current?.currentY() ?? 0);
        navigation.navigate("Confirmation");
    }

    const handleForgot = () => {
        setDrawerY(drawerRef.current?.currentY() ?? 0);
        navigation.navigate("ForgotPassword");
    }

    const forms = {
        EMAIL: {
            fields: [
                { placeholder: "Insira seu e-mail" }
            ],
            submit: {
                label: "continuar   →",
                press: handleContinue
            }
        },
        PASSWORD: {
            fields: [
                { placeholder: "Insira sua senha" }
            ],
            submit: {
                label: "acessar   →",
                press: handleFinish
            },
            forgot: handleForgot,
        }
    }

    return (
        <Area logo>
            <Drawer ref={drawerRef}>
                <StatusBar
                    translucent={true}
                    barStyle={"dark-content"}
                    backgroundColor={"transparent"}
                />
                {!validEmail &&
                    <AuthTemplate
                        title={"Olá, vamos começar!"}
                        subtitle={"Acesse sua conta ou cadastre-se para continuar"}
                        form={forms.EMAIL}
                        entering={TransitionLeftAnimation.entering}
                        exiting={TransitionRightAnimation.exiting}
                    />
                }
                {validEmail &&
                    <AuthTemplate
                        back
                        backFunction={handleBack}
                        title={"Que bom que voltou!"}
                        subtitle={"Digite sua senha para prosseguir"}
                        form={forms.PASSWORD}
                        entering={TransitionRightAnimation.entering}
                        exiting={TransitionLeftAnimation.exiting}
                    />
                }
            </Drawer>
        </Area>
    );
}

export default LoginView;