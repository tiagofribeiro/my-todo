import { View } from "react-native";

import { Area, Content } from "./styles";
import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";

const PasswordView = () => {
    return ( 
        <Area>
            <Content>
                <View style={{ marginBottom: 40, rowGap: 8 }}>
                    <Text
                        size={'h3'}
                        value={'Que bom que voltou!'}
                    />
                    <Text
                        size={'body2'}
                        value={'Digite sua senha para prosseguir'}
                    />
                </View>
                <Input placeholder={'Insira sua senha'} />
                <Button label={'acessar →'} />
            </Content>
        </Area>
     );
}
 
export default PasswordView;