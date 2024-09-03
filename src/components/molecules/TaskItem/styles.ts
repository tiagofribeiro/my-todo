import styled from "styled-components/native";

import { WHITE_PALACE } from "../../../utils/global/colors";

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

export { Content, Deadline }