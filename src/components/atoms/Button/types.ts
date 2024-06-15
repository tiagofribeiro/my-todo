import { SvgProps } from "react-native-svg";

export type AtomButtonType = {
    transparent?: boolean;
    label: string;
    icon?: {
        svg: React.FC<SvgProps>,
        position: string | "left" | "right",
    };
    press?: () => any;
}