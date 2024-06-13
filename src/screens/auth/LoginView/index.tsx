import { useContext, useRef, useState } from "react";
import { StatusBar } from "react-native";
import { SlideInRight, SlideOutLeft, useAnimatedKeyboard } from "react-native-reanimated";

import Drawer from "../../../components/atoms/Drawer";
import Area from "../../../components/atoms/Area";
import LoginTemplate from "../../../components/templates/LoginTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { AppContext } from "../../../context/app";

const LoginView = ({ navigation }: AuthStackProps<'Login'>) => {
    const appContext = useContext(AppContext);
    const drawerRef = useRef<AtomDrawerRef>(null);
    const keyboard = useAnimatedKeyboard();

    const [validEmail, setValidEmai] = useState(false);

    const forms = {
        email: {
            fields: [
                { placeholder: "Insira seu e-mail" }
            ],
            submit: {
                label: "continuar →",
                press: () => handlePress()
            }
        },
        password: {
            fields: [
                { placeholder: "Insira sua senha" }
            ],
            submit: {
                label: "acessar →",
                press: () => handlePress()
            }
        }
    }

    const handlePress = () => {
        setValidEmai(!validEmail);
        // appContext.setDrawerY(drawerRef.current?.currentY() ?? 0);
        // navigation.navigate("Register");
    };

    return (
        <Area>
            <Drawer ref={drawerRef}>
                <StatusBar
                    translucent={true}
                    barStyle={"dark-content"}
                    backgroundColor={"transparent"}
                />
                {!validEmail &&
                    <LoginTemplate
                        title={"Olá, vamos começar!"}
                        subtitle={"Acesse sua conta ou cadastre-se para continuar"}
                        form={forms.email}
                        entering={SlideInRight}
                        exiting={SlideOutLeft}
                    />
                }
                {validEmail &&
                    <LoginTemplate
                        title={"Que bom que voltou!"}
                        subtitle={"Digite sua senha para prosseguir"}
                        form={forms.password}
                        entering={SlideInRight}
                        exiting={SlideOutLeft}
                    />
                }
            </Drawer>
        </Area>
    );
}

export default LoginView;