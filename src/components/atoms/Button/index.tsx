import { Touchable } from "./styles"
import { AtomButtonType } from "./types";
import AtomText from "../Text";

import { WHITE_PALACE } from "../../../utils/global/colors";
import { FontFamilies, FontSizes } from "../../../utils/global/enums";

const AtomButton = ({
    center,
    transparent = false,
    marginY,
    label,
    icon,
    press,
}: AtomButtonType) => {
    return (
        <Touchable
            $center={center}
            $transparent={transparent}
            $marginY={marginY}
            onPress={press}
        >
            {icon &&
                <icon.svg width={24} height={24} fill={WHITE_PALACE.light} />
            }
            <AtomText
                size={FontSizes.LABEL}
                family={FontFamilies.SEMI}
                value={label}
            />
        </Touchable>
    );
}

export default AtomButton;