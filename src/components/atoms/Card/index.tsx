import { WHITE_PALACE } from "../../../utils/global/colors";
import { Touchable } from "./styles";
import { AtomCardType } from "./types";

const AtomCard = ({ color = WHITE_PALACE.lightest, children }: AtomCardType) => {
    return (
        <Touchable $color={color}>
            {children}
        </Touchable>
    );
}

export default AtomCard;