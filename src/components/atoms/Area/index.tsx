import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Area, BackLogo } from "./styles";
import { ChildrenType } from "../../../utils/global/types";
import Logo from "../../../../assets/logo.svg";

const AtomArea = ({ children }: ChildrenType) => {
    const insets = useSafeAreaInsets();

    return (
        <Area $insets={insets}>
            <BackLogo>
                <Logo />
            </BackLogo>
            {children}
        </Area>
    );

}

export default AtomArea;