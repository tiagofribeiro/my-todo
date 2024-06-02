import { Text, View } from "react-native";

import { Touchable } from "./styles"

const AtomButton = () => {
    return (
        <Touchable onPress={() => console.log("Eba")} >
            <View>
                <Text>botão →</Text>
            </View>
        </Touchable>
    );
}

export default AtomButton;