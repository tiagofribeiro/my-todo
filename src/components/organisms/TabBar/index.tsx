import { Area } from './styles';
import { TabBarType } from './types';
import TabButton from '../../molecules/TabButton';

import Smile from "../../../../assets/icons/smile-naruto.svg";
import Calendar from "../../../../assets/icons/calendar-karma.svg";
import Profile from "../../../../assets/icons/profile-clone.svg";

const content = [
    {
        label: 'Hoje',
        icon: Smile
    },
    {
        label: 'Calendário',
        icon: Calendar
    },
    {
        label: 'Conta',
        icon: Profile
    },
];

const TabBar = ({ state, navigation }: TabBarType) => {
    return (
        <Area>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return (
                    <TabButton
                        key={index}
                        focused={isFocused}
                        label={content[index].label}
                        Icon={content[index].icon}
                        onPress={onPress}
                    />
                );
            })}
        </Area>
    );
}

export default TabBar;