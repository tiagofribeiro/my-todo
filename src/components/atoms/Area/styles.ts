import { EdgeInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

type AreaType = {
    $insets: EdgeInsets;
}

const Area = styled.View<AreaType>(
    ({ $insets }) => `
        flex: 1;
        paddingTop: ${$insets.top.toFixed()}px;
        paddingBottom: ${$insets.bottom.toFixed()}px;
        paddingLeft: ${$insets.left.toFixed()}px;
        paddingRight: ${$insets.right.toFixed()}px;
`);

const BackLogo = styled.View`
    width: 100%;
    align-items: center;
    position: absolute;
    top: 80px;
`;

export { Area, BackLogo }