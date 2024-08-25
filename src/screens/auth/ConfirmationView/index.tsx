import { useEffect, useRef } from "react";
import { StatusBar } from "react-native";

import AtomArea from "../../../components/atoms/Area";
import AtomDrawer from "../../../components/atoms/Drawer";
import AuthTemplate from "../../../components/templates/AuthTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { useAppContext } from "../../../context/app";

const ConfirmationView = ({ navigation }: AuthStackProps<'Confirmation'>) => {
    const { drawerY, setDrawerY } = useAppContext();
    const drawerRef = useRef<AtomDrawerRef>(null);

    const handleContinue = () => {
        setDrawerY(drawerRef.current?.currentY() ?? 0);
        navigation.navigate("Register");
    };

    const handleBack = () => {
        navigation.goBack();
    }

    const form = {
        NEW_PASSWORD: {
            fields: [
                { placeholder: "- - - - - -" },
            ],
            submit: {
                label: "continuar   →",
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
                    title={"Te enviamos um código"}
                    subtitle={"Insira abaixo o código que foi enviado para o email ti********r@hotmail.com"}
                    form={form.NEW_PASSWORD}
                />
            </AtomDrawer>
        </AtomArea>
    );
}

export default ConfirmationView;