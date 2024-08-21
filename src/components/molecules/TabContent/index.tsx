import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { Area, Highlight } from "./styles";
import { TabButtonType } from "./types";
import Text from "../../atoms/Text";
import { ABYSS, MANTIS } from "../../../utils/global/colors";
import { useEffect } from "react";

const TabContent = ({ label, icon, focused }: TabButtonType) => {
    const backgroundColor = useSharedValue('transparent');

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: backgroundColor.value
        }
    });

    useEffect(() => {
        backgroundColor.value = withTiming(
            focused ? MANTIS.lightest : 'transparent',
            { duration: 1000 }
        );
    }, [focused])

    return (
        <Area>
            <Highlight style={animatedStyle}>
                <icon.svg fill={focused ? MANTIS.normal : ABYSS.dark} />
            </Highlight>
            <Text
                size={'body2'}
                value={label}
                color={focused ? MANTIS.normal : ABYSS.dark}
            />
        </Area>
    );
}

export default TabContent;