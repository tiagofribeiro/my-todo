import { useEffect, useRef } from "react";
import { StatusBar } from "react-native";

import AtomArea from "../../../components/atoms/Area";
import AtomDrawer from "../../../components/atoms/Drawer";
import AuthTemplate from "../../../components/templates/AuthTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { useAppContext } from "../../../context/app";

const ForgotPasswordView = ({ navigation }: AuthStackProps<'ForgotPassword'>) => {
    const { drawerY } = useAppContext();
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
                label: "criar nova senha   →",
                press: handleContinue
            }
        }
    }

    useEffect(() => {
        drawerRef.current?.scrollTo(drawerY);
    }, [drawerY])

    return (
        <AtomArea logo>
            <AtomDrawer ref={drawerRef}>
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
            </AtomDrawer>
        </AtomArea>
    );
}

export default ForgotPasswordView;