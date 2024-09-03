import { Content, Deadline } from "./styles";
import { TaskItemType } from "./types";
import AtomText from "../../atoms/Text";
import AtomCheck from "../../atoms/Check";

import { FontFamilies, FontSizes, TagTypes } from "../../../utils/global/enums";
import { ABYSS } from "../../../utils/global/colors";
import { Tags } from "../../../utils/global/tags";
import AtomCard from "../../atoms/Card";

const TaskItem = ({ item }: TaskItemType) => {
    const tag = item.tag ? Tags[item.tag] : Tags[TagTypes.DEFAULT];

    const dateOptions: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
    };

    return (
        <AtomCard tag={tag}>
            <Content>
                <AtomText
                    size={FontSizes.TITLE}
                    family={FontFamilies.SEMI}
                    value={item.title}
                    color={ABYSS.normal}
                />
                {item.descr &&
                    <AtomText
                        size={FontSizes.BODY2}
                        family={FontFamilies.REGULAR}
                        value={item.descr ?? ""}
                        color={ABYSS.normal}
                    />
                }
                {item.date &&
                    <Deadline>
                        <AtomText
                            size={FontSizes.CAPTION}
                            family={FontFamilies.REGULAR}
                            value={item.date.toLocaleString("pt-BR", dateOptions)}
                            color={ABYSS.lightest}
                        />
                    </Deadline>
                }
            </Content>
            <AtomCheck selected={item.done} />
        </AtomCard>
    );
}

export default TaskItem;