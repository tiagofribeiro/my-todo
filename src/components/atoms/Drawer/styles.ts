import styled from "styled-components/native";
import Animated from "react-native-reanimated";

type ContentType = {
    $windowHeight: number;
}

const Content = styled(Animated.View)<ContentType>(
    ({ $windowHeight }) => `
        flex: 1;
        padding: 24px;
        border-top-left-radius: 26px;
        border-top-right-radius: 26px;
        background-color: #1E1B19;
    `
);

export { Content }
