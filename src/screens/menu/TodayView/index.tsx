import AtomArea from "../../../components/atoms/Area";
import TodayTemplate from "../../../components/templates/TodayTemplate"
import { MenuStackProps } from "../../../navigation/types";

const TodayView = ({ navigation }: MenuStackProps<'Today'>) => {
    return (
        <AtomArea>
            <TodayTemplate today={'Hoje'} />
        </AtomArea>
    );
}

export default TodayView;