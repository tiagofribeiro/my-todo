import { AtomTextType, FontFamilies } from "./types";
import { Text } from "./styles";
import { WHITE_PALACE } from "../../../utils/global/colors";

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