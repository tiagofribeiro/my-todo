import { useRef } from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Area } from "./styles";
import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import Drawer, { AtomDrawerRef } from "../../../components/atoms/Drawer";
import { AuthStackType } from "../../../navigation/types";

const LoginView = ({ navigation }: NativeStackScreenProps<AuthStackType, 'Login'>) => {
    const drawerRef = useRef<AtomDrawerRef>(null);

    return (
        <Area>
            <Drawer ref={drawerRef}>
                <View style={{flex: 1, justifyContent: 'center', marginBottom: 40, rowGap: 8 }}>
                    <Text
                        size={'h3'}
                        value={'Olá, vamos começar!'}
                    />
                    <Text
                        size={'body2'}
                        value={'Acesse sua conta ou cadastre-se para continuar'}
                    />
                    <Input placeholder={'Insira seu e-mail'} />
                    <Button label={'continuar →'} press={() => navigation.navigate('Register')} />
                </View>
            </Drawer>
        </Area>
    );
}

export default LoginView;