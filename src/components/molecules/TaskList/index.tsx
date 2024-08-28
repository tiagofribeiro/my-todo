import { Card, List } from "./styles";
import { TaskItemType, TaskListType } from "./types";
import AtomText from "../../atoms/Text";

import { FontSizes } from "../../../utils/global/enums";
import { ABYSS } from "../../../utils/global/colors";

const TaskItem = ({ item }: TaskItemType) => {
    return (
        <Card>
            <AtomText
                size={FontSizes.BODY2}
                value={item.title}
                color={ABYSS.darker}
            />
        </Card>
    );
}

const TaskList = ({ items }: TaskListType) => {
    return (
        <List data={items} renderItem={TaskItem} />
    );
}

export default TaskList;