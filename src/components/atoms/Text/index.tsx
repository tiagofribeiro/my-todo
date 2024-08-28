import { AtomTextType } from "./types";
import { Text } from "./styles";

import { WHITE_PALACE } from "../../../utils/global/colors";
import { FontFamilies } from "../../../utils/global/enums";

const AtomText = ({
    size,
    family = FontFamilies.REGULAR,
    value,
    color = WHITE_PALACE.light
}: AtomTextType) => {
    return (
        <Text $size={size} $family={family} $color={color}>
            {value}
        </Text>
    )
}

export default AtomText;