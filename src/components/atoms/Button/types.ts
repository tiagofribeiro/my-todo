import { SvgProps } from "react-native-svg";

export type AtomButtonType = {
    center?: boolean;
    transparent?: boolean;
    marginY?: number;
    label: string;
    icon?: {
        svg: React.FC<SvgProps>,
        position: string | "left" | "right",
    };
    press?: () => any;
}