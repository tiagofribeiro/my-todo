import Animated from "react-native-reanimated";
import styled from "styled-components/native";

type HighlightType = {
    color?: string;
}

const Area = styled.View`
    flex: 1;
    row-gap: 4px;
    align-items: center;
    justify-content: center;
`;

const Highlight = styled(Animated.View)<HighlightType>(({ color }) => `
    padding: 4px 20px;
    border-radius: 14px;
`);

export { Area, Highlight }