import { Tag, Touchable } from "./styles";
import { AtomCardType } from "./types";
import AtomText from "../Text";

import { WHITE_PALACE } from "../../../utils/global/colors";
import { FontFamilies, FontSizes } from "../../../utils/global/enums";

const AtomCard = ({
    color = WHITE_PALACE.lightest,
    tag,
    press,
    children,
}: AtomCardType) => {
    return (
        <Touchable $color={color}>
            {tag &&
                <Tag $color={tag.color}>
                    <AtomText
                        size={FontSizes.H1}
                        family={FontFamilies.SEMI}
                        value={tag.emoji}
                    />
                </Tag>
            }
            {children}
        </Touchable>
    );
}

export default AtomCard;