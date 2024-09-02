import { Content, Icon, Deadline } from "./styles";
import { TaskItemType } from "./types";
import AtomText from "../../atoms/Text";
import AtomCheck from "../../atoms/Check";

import { FontFamilies, FontSizes, TagTypes } from "../../../utils/global/enums";
import { ABYSS } from "../../../utils/global/colors";
import { Tags } from "../../../utils/global/tags";
import AtomCard from "../../atoms/Card";

const TaskItem = ({ item }: TaskItemType) => {
    const tag = item.tag ? Tags[item.tag] : Tags[TagTypes.DEFAULT];

    return (
        <AtomCard>
            <Icon $color={tag.color}>
                <AtomText
                    size={FontSizes.H1}
                    family={FontFamilies.SEMI}
                    value={tag.emoji}
                />
            </Icon>
            <Content>
                <AtomText
                    size={FontSizes.TITLE}
                    family={FontFamilies.SEMI}
                    value={item.title}
                    color={ABYSS.normal}
                />
                {item.descr &&
                    <>
                        <AtomText
                            size={FontSizes.BODY2}
                            family={FontFamilies.REGULAR}
                            value={item.descr ?? ""}
                            color={ABYSS.normal}
                        />
                        <Deadline>
                            <AtomText
                                size={FontSizes.CAPTION}
                                family={FontFamilies.REGULAR}
                                value={'10 de junho'}
                                color={ABYSS.lightest}
                            />
                        </Deadline>
                    </>
                }
            </Content>
            <AtomCheck selected={item.done} />
        </AtomCard>
    );
}

export default TaskItem;