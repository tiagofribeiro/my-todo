import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Area, BackLogo } from "./styles";
import Logo from "../../../../assets/logo.svg";
import { AtomAreaType } from "./types";

const AtomArea = ({ logo, children }: AtomAreaType) => {
    const insets = useSafeAreaInsets();

    return (
        <Area $insets={insets}>
            {logo &&
                <BackLogo>
                    <Logo />
                </BackLogo>
            }
            {children}
        </Area>
    );

}

export default AtomArea;