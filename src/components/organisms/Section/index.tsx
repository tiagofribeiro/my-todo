import { Area, Dashed, Title } from "./styles";
import { SectionType } from "./types";
import AtomText from "../../atoms/Text";
import TaskList from "../../molecules/TaskList";

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
            <TaskList items={list} />
        </Area>
    );
}

export default Section;