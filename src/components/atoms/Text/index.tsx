import { Body1, Body2, ButtonText, Header3 } from "./styles";
import { AtomTextType } from "./types";
import { WHITE_PALACE } from "../../../utils/global/colors";

const AtomText = ({ size, value, color = WHITE_PALACE.light }: AtomTextType) => {
    const sizes = {
        'h3':
            <Header3 $color={color}>
                {value}
            </Header3>,
        'body1':
            <Body1 $color={color}>
                {value}
            </Body1>,
        'body2':
            <Body2 $color={color}>
                {value}
            </Body2>,
        'button':
            <ButtonText $color={color}>
                {value}
            </ButtonText>
    }

    return sizes[size];
}

export default AtomText;