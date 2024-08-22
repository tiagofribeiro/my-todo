import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { SvgProps } from "react-native-svg";

export type TabContentType = {
    focused: boolean;
    label: string;
    Icon: React.FC<SvgProps>;
    onPress: () => void;
}