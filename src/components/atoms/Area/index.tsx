import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Area } from "./styles";
import { ChildrenType } from "../../../utils/global/types";

const AtomArea = ({ children }: ChildrenType) => {
    const insets = useSafeAreaInsets();

    return (
        <Area $insets={insets}>
            {children}
        </Area>
    );

}

export default AtomArea;