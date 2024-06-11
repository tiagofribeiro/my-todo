import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import { AuthStackType } from "../../../navigation/types";

const RegisterView = ({ navigation }: NativeStackScreenProps<AuthStackType, 'Register'>) => {
    return (
        <View style={{ height: 'auto', marginBottom: 40, rowGap: 8 }}>
            <Text
                size={'h3'}
                value={'Perfeito!'}
            />
            <Text
                size={'body2'}
                value={'Agora crie uma senha para prosseguir'}
            />
            <Input placeholder={'Crie uma senha'} />
            <Input placeholder={'Repita sua senha'} />
            <Button label={'continuar →'} press={() => console.log('registrado!')} />
        </View>
    );
}

export default RegisterView;