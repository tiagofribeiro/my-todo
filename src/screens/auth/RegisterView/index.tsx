import { useContext, useEffect, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Content, Form, Title } from "./styles";
import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import Drawer from "../../../components/atoms/Drawer";
import { AuthStackProps, AuthStackType } from "../../../navigation/types";
import { AtomDrawerRef } from "../../../components/atoms/Drawer/types";
import { AppContext } from "../../../context/app";
import { StatusBar } from "react-native";

const RegisterView = ({ navigation }: AuthStackProps<'Register'>) => {
    const appContext = useContext(AppContext);
    const drawerRef = useRef<AtomDrawerRef>(null);

    useEffect(() => {
        drawerRef.current?.scrollTo(appContext.drawerY);
    }, [appContext.drawerY])

    return (
        <Drawer ref={drawerRef}>
            <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <Content>
                <Title>
                    <Text
                        size={'h3'}
                        value={'Perfeito!'}
                    />
                    <Text
                        size={'body2'}
                        value={'Agora crie uma senha para prosseguir'}
                    />
                </Title>
                <Form>
                    <Input placeholder={'Crie uma senha'} />
                    <Input placeholder={'Repita sua senha'} />
                    <Button label={'criar conta →'} press={() => navigation.goBack()} />
                </Form>
            </Content>
        </Drawer>
    );
}

export default RegisterView;