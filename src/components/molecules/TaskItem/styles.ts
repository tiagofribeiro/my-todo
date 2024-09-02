import styled from "styled-components/native";

import { WHITE_PALACE } from "../../../utils/global/colors";

type IconType = {
    $color?: string;
}

const Icon = styled.View<IconType>(({ $color }) => `
    padding: 8px 12px;
    border-radius: 12px;
    justify-content: center;
    background-color: ${$color};
`);

const Content = styled.View`
    flex: 1;
    align-items: baseline;
    justify-content: center;
`;

const Deadline = styled.View`
    padding: 4px 8px;
    margin-top: 8px;
    border-radius: 8px;
    align-items: center;
    background-color: ${WHITE_PALACE.lighter};
`;

export { Icon, Content, Deadline }