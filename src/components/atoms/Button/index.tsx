import { Touchable } from "./styles"
import { AtomButtonType } from "./types";
import Text from "../Text";

const AtomButton = ({ label, press }: AtomButtonType) => {
    return (
        <Touchable onPress={press} >
            <Text size={'button'} value={label} />
        </Touchable>
    );
}

export default AtomButton;