import styled from "styled-components/native";

type TouchableType = {
    $center?: boolean;
    $transparent: boolean;
    $marginY?: number;
}

const Touchable = styled.TouchableOpacity<TouchableType>(
    ({ $center = false, $transparent = false, $marginY }) => `
        flex-direction: row;
        column-gap: 8px;
        height: 48px;
        padding: 10px 24px;
        margin-vertical: ${$marginY ? $marginY : 0}px;
        align-self: ${$center ? `center` : `stretch`};
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: ${$transparent ? `transparent` : `#03665E`};
`);

export { Touchable }