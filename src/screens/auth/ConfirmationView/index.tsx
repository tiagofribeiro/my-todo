import { useContext, useEffect, useRef } from "react";
import { StatusBar } from "react-native";

import Area from "../../../components/atoms/Area";
import Drawer from "../../../components/atoms/Drawer";
import AuthTemplate from "../../../components/templates/AuthTemplate";
import { AuthStackProps } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { AppContext } from "../../../context/app";

const ConfirmationView = ({ navigation }: AuthStackProps<'Confirmation'>) => {
    const appContext = useContext(AppContext);
    const drawerRef = useRef<AtomDrawerRef>(null);

    const handleContinue = () => {
        appContext.setDrawerY(drawerRef.current?.currentY() ?? 0);
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
                label: "continuar →",
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
                    title={"Te enviamos um código"}
                    subtitle={"Insira abaixo o código que foi enviado para o email ti********r@hotmail.com"}
                    form={form.NEW_PASSWORD}
                />
            </Drawer>
        </Area>
    );
}

export default ConfirmationView;