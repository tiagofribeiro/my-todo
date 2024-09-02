import styled from "styled-components/native";

type TouchableType = {
    $color: string;
}

const Touchable = styled.TouchableOpacity<TouchableType>(({ $color }) => `
    flex-direction: row;
    column-gap: 12px;
    padding: 12px;
    border-radius: 14px;
    background-color: ${$color};
`);

export { Touchable }