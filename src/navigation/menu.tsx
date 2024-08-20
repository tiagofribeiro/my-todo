import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TodayView from "../screens/menu/TodayView";
import CalendarView from "../screens/menu/CalendarView";
import AccountView from "../screens/menu/AccountView";
import { ABYSS, MANTIS, WHITE_PALACE } from "../utils/global/colors";

import Smile from "../../assets/icons/smile-naruto.svg";
import Calendar from "../../assets/icons/calendar-karma.svg";
import Profile from "../../assets/icons/profile-clone.svg";

const Menu = createBottomTabNavigator();

const theme = {
    paddingHorizontal: 8,
    backgroundColor: WHITE_PALACE.lightest,
}


const MenuStack = () => {
    return (
        <Menu.Navigator
            initialRouteName={'Today'}
            screenOptions={{
                headerShown: false,
                tabBarStyle: theme,
            }}
        >
            <Menu.Screen
                name={'Today'}
                component={TodayView}
                options={{
                    tabBarLabel: 'Hoje',
                    tabBarActiveTintColor: MANTIS.darker,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Smile fill={ABYSS.dark} />
                    )
                }}
            />
            <Menu.Screen
                name={'Calendar'}
                component={CalendarView}
                options={{
                    tabBarLabel: 'Calendário',
                    tabBarActiveTintColor: MANTIS.darker,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Calendar fill={ABYSS.dark} />
                    )
                }}
            />
            <Menu.Screen
                name={'Account'}
                component={AccountView}
                options={{
                    tabBarLabel: 'Conta',
                    tabBarActiveTintColor: MANTIS.darker,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Profile fill={ABYSS.dark} />
                    )
                }}
            />
        </Menu.Navigator>
    );
}

export default MenuStack;