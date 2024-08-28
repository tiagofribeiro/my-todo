import { FlatList } from "react-native";
import styled from "styled-components/native";

import { TaskType } from "../../../context/types";

import { WHITE_PALACE } from "../../../utils/global/colors";

const List = styled(FlatList<TaskType>)``;

const Card = styled.View`
    padding: 8px;
    background-color: ${WHITE_PALACE.lightest}
`;

export { List, Card }