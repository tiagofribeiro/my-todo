import { Card, Content, Icon, List, Separator, Tag } from "./styles";
import { TaskItemType, TaskListType } from "./types";
import AtomText from "../../atoms/Text";

import { FontFamilies, FontSizes } from "../../../utils/global/enums";
import { ABYSS } from "../../../utils/global/colors";

const TaskItem = ({ item }: TaskItemType) => {
    return (
        <Card>
            <Icon>
                <AtomText value={'👽'} size={FontSizes.H1} family={FontFamilies.SEMI} />
            </Icon>
            <Content>
                <AtomText
                    size={FontSizes.TITLE}
                    family={FontFamilies.SEMI}
                    value={item.title}
                    color={ABYSS.normal}
                />
                {item.descr && (
                    <>
                        <AtomText
                            size={FontSizes.BODY2
                            }
                            family={FontFamilies.REGULAR}
                            value={item.descr}
                            color={ABYSS.normal}
                        />
                        <Tag>
                            <AtomText
                                size={FontSizes.CAPTION}
                                family={FontFamilies.REGULAR}
                                value={'10 de junho'}
                                color={ABYSS.lightest}
                            />
                        </Tag>
                    </>
                )

                }
            </Content>
        </Card>
    );
}

const TaskList = ({ items }: TaskListType) => {
    return (
        <List scrollEnabled data={items} renderItem={TaskItem} ItemSeparatorComponent={Separator} />
    );
}

export default TaskList;