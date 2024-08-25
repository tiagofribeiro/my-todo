import { useEffect, useRef } from "react";
import { StatusBar } from "react-native";

import AtomArea from "../../../components/atoms/Area";
import AtomDrawer from "../../../components/atoms/Drawer";
import AuthTemplate from "../../../components/templates/AuthTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { useAppContext } from "../../../context/app";

const RegisterView = ({ navigation }: AuthStackProps<'Register'>) => {
    const { drawerY, setIsAuthenticated } = useAppContext()
    const drawerRef = useRef<AtomDrawerRef>(null);

    const handleContinue = () => {
        setIsAuthenticated(true);
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
                label: "criar conta   →",
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
                    title={"Perfeito!"}
                    subtitle={"Agora crie sua senha para prosseguir"}
                    form={form.NEW_PASSWORD}
                />
            </AtomDrawer>
        </AtomArea>
    );
}

export default RegisterView;