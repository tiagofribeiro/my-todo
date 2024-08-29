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
                    { title: 'Lavar louça', done: false },
                    { title: 'Programar', done: false }
                ]}
            />
            <Section
                title={'Tarefas Gerais'}
                list={[
                    { title: 'Upgrade pc', descr: 'comprar as peças tudo caro demais', done: false },
                    { title: 'Curso docker', descr: 'tenho que fazer nmrl menor', done: false }
                ]}
            />
        </Area>
    );
}

export default TodayTemplate;