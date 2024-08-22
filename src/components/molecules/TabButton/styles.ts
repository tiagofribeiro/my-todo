import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const Touchable = styled.TouchableOpacity``;

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


export { Touchable, Content, Highlight }