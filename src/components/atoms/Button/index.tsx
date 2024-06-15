import { Touchable } from "./styles"
import { AtomButtonType } from "./types";
import Text from "../Text";

const AtomButton = ({ transparent = false, label, icon, press }: AtomButtonType) => {
    return (
        <Touchable $transparent={transparent} onPress={press}>
            {icon &&
                <icon.svg width={24} height={24} />
            }
            <Text size={'button'} value={label} />
        </Touchable>
    );
}

export default AtomButton;