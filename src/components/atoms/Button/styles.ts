import styled from "styled-components/native";

type TouchableType = {
    $transparent: boolean;
}

const Touchable = styled.TouchableOpacity<TouchableType>(
    ({ $transparent = false }) => `
        flex-direction: row;
        column-gap: 8px;
        height: 48px;
        padding: 10px 24px;
        align-self: ${$transparent ? `center` : `stretch`};
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: ${$transparent ? `transparent` : `#03665E`};
`);

export { Touchable }