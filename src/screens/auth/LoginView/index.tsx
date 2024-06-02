import { View } from "react-native";

import { Area, Content } from "./styles";
import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";

const LoginView = () => {
    return (
        <Area>
            <Content>
                <View style={{ marginBottom: 40, rowGap: 8 }}>
                    <Text size={'h3'} value={'Olá, vamos começar!'} />
                    <Text size={'body2'} value={'Acesse sua conta ou cadastre-se para continuar'} />
                </View>
                <Input />
                <Button />
            </Content>
        </Area>
    );
}

export default LoginView;