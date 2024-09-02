import { Area, Dashed, List, Separator, Title } from "./styles";
import { SectionType } from "./types";
import AtomText from "../../atoms/Text";
import TaskItem from "../../molecules/TaskItem";

import { ABYSS } from "../../../utils/global/colors";
import { FontFamilies, FontSizes } from "../../../utils/global/enums";

const Section = ({
    inline = false,
    title,
    list
}: SectionType) => {
    return (
        <Area $inline={inline}>
            {title &&
                <Title>
                    <AtomText
                        size={FontSizes.H2}
                        family={FontFamilies.EXTRA}
                        value={title}
                        color={ABYSS.normal}
                    />
                    <Dashed />
                </Title>
            }
            <List
                scrollEnabled={false}
                data={list}
                renderItem={TaskItem}
                ItemSeparatorComponent={Separator}
            />
        </Area>
    );
}

export default Section;