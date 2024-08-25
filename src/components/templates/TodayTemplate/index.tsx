import { Area, Section, Top } from "./styles";
import { TodayTemplateType } from "./types";
import AtomText from "../../atoms/Text";
import { FontFamilies, FontSizes } from "../../atoms/Text/types";
import { ABYSS } from "../../../utils/global/colors";
import TaskList from "../../organisms/TaskList";

const TodayTemplate = ({
    today,
    quick,
    general
}: TodayTemplateType) => {
    return (
        <Area>
            <Top>
                <AtomText
                    size={FontSizes.H1}
                    family={FontFamilies.EXTRA}
                    value={'Hoje'}
                    color={ABYSS.normal}
                />
                <AtomText
                    size={FontSizes.BODY1}
                    value={'Segunda-feira • 19 de Agosto de 2024'}
                    color={ABYSS.normal}
                />
            </Top>
            <Section>
                <AtomText
                    size={FontSizes.H2}
                    family={FontFamilies.EXTRA}
                    value={'Tarefas rápidas'}
                    color={ABYSS.normal}
                />
                <TaskList />
            </Section>
            <Section>
                <AtomText
                    size={FontSizes.H2}
                    family={FontFamilies.EXTRA}
                    value={'Tarefas gerais'}
                    color={ABYSS.normal}
                />
            </Section>
        </Area>
    );
}

export default TodayTemplate;