import { View } from "react-native";

import { Area, Content } from "./styles";
import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackType } from "../../../navigation/root";

const LoginView = ({ navigation }: NativeStackScreenProps<RootStackType, 'Login'>) => {
    return (
        <Area>
            <Content>
                <View style={{ marginBottom: 40, rowGap: 8 }}>
                    <Text
                        size={'h3'}
                        value={'Olá, vamos começar!'}
                    />
                    <Text
                        size={'body2'}
                        value={'Acesse sua conta ou cadastre-se para continuar'}
                    />
                </View>
                <Input placeholder={'Insira seu e-mail'} />
                <Button label={'continuar →'} press={() => navigation.navigate('Password')} />
            </Content>
        </Area>
    );
}

export default LoginView;