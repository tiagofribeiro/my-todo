import { Body1, Body2, ButtonText, Header3 } from "./styles";
import { AtomTextType } from "./types";

const AtomText = ({ size, value }: AtomTextType) => {
    const sizes = {
        'h3':
            <Header3>
                {value}
            </Header3>,
        'body1':
            <Body1>
                {value}
            </Body1>,
        'body2':
            <Body2>
                {value}
            </Body2>,
        'button':
            <ButtonText>
                {value}
            </ButtonText>
    }

    return sizes[size];
}

export default AtomText;