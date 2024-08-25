import AtomArea from "../../../components/atoms/Area";
import TodayTemplate from "../../../components/templates/TodayTemplate"
import { MenuStackProps } from "../../../navigation/types";

const TodayView = ({ navigation }: MenuStackProps<'Today'>) => {
    return (
        <AtomArea>
            <TodayTemplate
                today={'Hoje'}
                quick={['Lavar', 'Correr', 'Pular']}
                general={['Projeto', 'Compras', 'Metas']}
            />
        </AtomArea>
    );
}

export default TodayView;