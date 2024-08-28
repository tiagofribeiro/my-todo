import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { Content, Highlight, Touchable } from "./styles";
import { TabContentType } from "./types";
import AtomText from "../../atoms/Text";

import { ABYSS, MANTIS } from "../../../utils/global/colors";
import { FontFamilies, FontSizes } from "../../../utils/global/enums";

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
                <AtomText
                    size={FontSizes.BODY2}
                    family={FontFamilies.SEMI}
                    value={label}
                    color={focused ? MANTIS.normal : ABYSS.dark}
                />
            </Content>
        </Touchable>
    );
}

export default TabButton;