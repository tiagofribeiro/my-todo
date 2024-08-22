import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { Content, Highlight, Touchable } from "./styles";
import { TabContentType } from "./types";
import Text from "../../atoms/Text";
import { ABYSS, MANTIS } from "../../../utils/global/colors";

const TabButton = ({
    focused,
    label,
    Icon,
    onPress
}: TabContentType) => {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: withTiming(focused ? MANTIS.lightest : 'transparent', { duration: 400 })
        }
    });

    return (
        <Touchable style={{ flex: 1 }} onPress={onPress}>
            <Content>
                <Highlight style={animatedStyle}>
                    <Icon fill={focused ? MANTIS.normal : ABYSS.dark} />
                </Highlight>
                <Text
                    size={'body2'}
                    value={label}
                    color={focused ? MANTIS.normal : ABYSS.dark}
                />
            </Content>
        </Touchable>
    );
}

export default TabButton;