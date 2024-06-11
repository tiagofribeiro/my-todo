import { Content, Touchable } from "./styles"
import Text from "../Text";

type AtomButtonType = {
    label: string;
    press?: () => any;
}

const AtomButton = ({ label, press }: AtomButtonType) => {
    return (
        <Touchable onPress={press} >
            <Content>
                <Text size={'button'} value={label} />
            </Content>
        </Touchable>
    );
}

export default AtomButton;