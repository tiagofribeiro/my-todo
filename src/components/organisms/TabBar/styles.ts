import styled from "styled-components/native";
import { WHITE_PALACE } from "../../../utils/global/colors";
import Animated from "react-native-reanimated";

const Area = styled.View`
    flex: 1;
    flex-direction: row;
    height: 78px;
    padding: 0 8px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${WHITE_PALACE.lightest};
`;

const TabButton = styled.TouchableOpacity``;

const Content = styled.View`
    flex: 1;
    row-gap: 4px;
    align-items: center;
    justify-content: center;
`;

const Highlight = styled(Animated.View)`
    padding: 4px 20px;
    border-radius: 14px;
`;

export { Area, TabButton, Content, Highlight }