import { FlatList } from "react-native";
import styled from "styled-components/native";

import { TaskType } from "../../../context/types";

import { MANTIS, WHITE_PALACE } from "../../../utils/global/colors";

const List = styled(FlatList<TaskType>)``;

const Card = styled.View`
    flex-direction: row;
    column-gap: 12px;
    padding: 12px;
    border-radius: 14px;
    background-color: ${WHITE_PALACE.lightest}
`;

const Icon = styled.View`
    padding: 10px 14px;
    border-radius: 12px;
    justify-content: center;
    background-color: ${MANTIS.lightest};
`;

const Content = styled.View`
    flex: 1;
    align-items: baseline;
    justify-content: center;
`;

const Tag = styled.View`
    padding: 4px 8px;
    margin-top: 8px;
    border-radius: 8px;
    align-items: center;
    background-color: ${WHITE_PALACE.lighter};
`;

const Separator = styled.View`
    height: 12px;
`;

export { List, Card, Icon, Content, Tag, Separator }