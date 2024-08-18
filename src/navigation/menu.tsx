import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TodayView from "../screens/menu/TodayView";
import CalendarView from "../screens/menu/CalendarView";
import AccountView from "../screens/menu/AccountView";

const Menu = createBottomTabNavigator();

const MenuStack = () => {
    return (
        <Menu.Navigator
            initialRouteName={'Today'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Menu.Screen name={'Today'} component={TodayView} />
            <Menu.Screen name={'Calendar'} component={CalendarView} />
            <Menu.Screen name={'Account'} component={AccountView} />
        </Menu.Navigator>
    );
}

export default MenuStack;