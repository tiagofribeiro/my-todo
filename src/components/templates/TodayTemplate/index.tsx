import { Area, Scroll, Top } from "./styles";
import { TodayTemplateType } from "./types";
import AtomText from "../../atoms/Text";
import Section from "../../organisms/Section";

import { ABYSS } from "../../../utils/global/colors";
import { FontFamilies, FontSizes, TagTypes } from '../../../utils/global/enums';

const TodayTemplate = ({
    today,
    sections,
}: TodayTemplateType) => {
    return (
        <Scroll>
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
                {sections.map((section, index) => {
                    return (
                        <Section
                            key={index}
                            title={section.title}
                            list={section.list}
                        />
                    )
                })}
            </Area>
        </Scroll>
    );
}

export default TodayTemplate;