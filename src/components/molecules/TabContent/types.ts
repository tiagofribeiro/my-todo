import { SvgProps } from "react-native-svg";

export type TabButtonType = {
    focused: boolean;
    label: string;
    icon: {
        svg: React.FC<SvgProps>;
    }
}