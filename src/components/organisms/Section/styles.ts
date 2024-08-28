import styled from "styled-components/native";
import { WHITE_PALACE } from "../../../utils/global/colors";

type AreaType = {
    $inline: boolean;
}

const Area = styled.View<AreaType>(({ $inline }) => `
    row-gap: 8px;
    padding: ${$inline ? `0` : '0 16px'};
`);

const Title = styled.View`
    flex-direction: row;
    column-gap: 16px;
    padding: 16px 0;
    align-items: center;
`;

const Dashed = styled.View`
    flex: 1;
    border-top-width: 2px;
    border-top-color: ${WHITE_PALACE.light};
    border-style: dashed;
`;

export { Area, Title, Dashed }