import { useContext, useEffect, useRef } from "react";
import { StatusBar } from "react-native";

import Area from "../../../components/atoms/Area";
import Drawer from "../../../components/atoms/Drawer";
import AuthTemplate from "../../../components/templates/AuthTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { AppContext } from "../../../context/app";

const RegisterView = ({ navigation }: AuthStackProps<'Register'>) => {
    const appContext = useContext(AppContext);
    const drawerRef = useRef<AtomDrawerRef>(null);

    const handleContinue = () => {
        console.log("Continuar");
    };

    const handleBack = () => {
        navigation.goBack();
    }

    const form = {
        NEW_PASSWORD: {
            fields: [
                { placeholder: "Crie uma senha" },
                { placeholder: "Repita sua senha" },
            ],
            submit: {
                label: "criar conta →",
                press: handleContinue
            }
        }
    }

    useEffect(() => {
        drawerRef.current?.scrollTo(appContext.drawerY);
    }, [appContext.drawerY])

    return (
        <Area>
            <Drawer ref={drawerRef}>
                <StatusBar
                    translucent={true}
                    barStyle={"dark-content"}
                    backgroundColor={"transparent"}
                />
                <AuthTemplate
                    back
                    backFunction={handleBack}
                    title={"Perfeito!"}
                    subtitle={"Agora crie sua senha para prosseguir"}
                    form={form.NEW_PASSWORD}
                />
            </Drawer>
        </Area>
    );
}

export default RegisterView;