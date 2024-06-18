import { useContext, useEffect, useRef } from "react";
import { StatusBar } from "react-native";

import Area from "../../../components/atoms/Area";
import Drawer from "../../../components/atoms/Drawer";
import AuthTemplate from "../../../components/templates/AuthTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { AppContext } from "../../../context/app";

const ForgotPasswordView = ({ navigation }: AuthStackProps<'ForgotPassword'>) => {
    const appContext = useContext(AppContext);
    const drawerRef = useRef<AtomDrawerRef>(null);

    const handleContinue = () => {
        console.log("Continuar");
    };

    const handleBack = () => {
        navigation.goBack();
    }

    const form = {
        FORGOT_PASSWORD: {
            fields: [
                { placeholder: "Crie uma nova senha" },
                { placeholder: "Repita sua nova senha" },
            ],
            submit: {
                label: "criar nova senha →",
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
                    title={"Crie uma nova senha"}
                    subtitle={"Essa será sua nova senha a partir de agora"}
                    form={form.FORGOT_PASSWORD}
                />
            </Drawer>
        </Area>
    );
}

export default ForgotPasswordView;