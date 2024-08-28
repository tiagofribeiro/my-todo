import { Area, Top } from "./styles";
import { TodayTemplateType } from "./types";
import AtomText from "../../atoms/Text";
import Section from "../../organisms/Section";

import { ABYSS } from "../../../utils/global/colors";
import { FontFamilies, FontSizes } from '../../../utils/global/enums';

const TodayTemplate = ({
    today,
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
            
            <Section
                title={'Tarefas Rápidas'}
                list={[
                    { title: 'lavar louça', done: false },
                    { title: 'programar', done: false }
                ]}
            />
            <Section
                title={'Tarefas Gerais'}
                list={[
                    { title: 'upgrade pc', descr: 'comprar as peças', done: false },
                    { title: 'curso docker', descr: 'tenho que fazer nmrl', done: false }
                ]}
            />
        </Area>
    );
}

export default TodayTemplate;