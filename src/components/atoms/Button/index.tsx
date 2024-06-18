import { Touchable } from "./styles"
import { AtomButtonType } from "./types";
import Text from "../Text";

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
                <icon.svg width={24} height={24} />
            }
            <Text size={'button'} value={label} />
        </Touchable>
    );
}

export default AtomButton;