import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabContent from "../components/molecules/TabContent";
import TodayView from "../screens/menu/TodayView";
import CalendarView from "../screens/menu/CalendarView";
import AccountView from "../screens/menu/AccountView";
import { WHITE_PALACE } from "../utils/global/colors";

import Smile from "../../assets/icons/smile-naruto.svg";
import Calendar from "../../assets/icons/calendar-karma.svg";
import Profile from "../../assets/icons/profile-clone.svg";

const Menu = createBottomTabNavigator();

const theme = {
    height: 78,
    paddingHorizontal: 8,
    backgroundColor: WHITE_PALACE.lightest,
}


const MenuStack = () => {
    return (
        <Menu.Navigator
            initialRouteName={'Today'}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: theme,
            }}
        >
            <Menu.Screen
                name={'Today'}
                component={TodayView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabContent label={'Hoje'} icon={{ svg: Smile }} focused={focused} />
                    )
                }}
            />
            <Menu.Screen
                name={'Calendar'}
                component={CalendarView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabContent label={'Calendário'} icon={{ svg: Calendar }} focused={focused} />
                    )
                }}
            />
            <Menu.Screen
                name={'Account'}
                component={AccountView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabContent label={'Conta'} icon={{ svg: Profile }} focused={focused} />
                    )
                }}
            />
        </Menu.Navigator>
    );
}

export default MenuStack;