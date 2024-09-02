import { ScrollView } from "react-native-gesture-handler";

import AtomArea from "../../../components/atoms/Area";
import TodayTemplate from "../../../components/templates/TodayTemplate"
import { MenuStackProps } from "../../../navigation/types";

import { TagTypes } from "../../../utils/global/enums";

const TodayView = ({ navigation }: MenuStackProps<'Today'>) => {
    const sections = [
        {
            title: 'Tarefas Rápidas',
            list: [
                { title: 'Lavar louça loucamente ouvindo periclão', done: true, tag: TagTypes.HOUSE },
                { title: 'Programar', done: false, tag: TagTypes.WORK },
                { title: 'Jogar', done: false, tag: TagTypes.FUN },
                { title: 'Malhá', done: false, tag: TagTypes.EXERC },
            ]
        },
        {
            title: 'Tarefas Gerais',
            list: [
                { title: 'Upgrade pc', descr: 'comprar as peças tudo caro demais rtx 4090 wow', done: true },
                { title: 'Curso docker', descr: 'tenho que fazer nmrl menor', done: false, tag: TagTypes.STUDY },
                { title: 'Pagar boleto', descr: 'nossa pq sou mt adulto boleto ruim', done: false, tag: TagTypes.SHOP },
                { title: 'Fogo', descr: 'muito fumaça doido maluco desespero', done: false, tag: TagTypes.ALERT },
            ]
        },
    ]


    return (
        <AtomArea>
            <TodayTemplate today={'Hoje'} sections={sections} />
        </AtomArea>
    );
}

export default TodayView;