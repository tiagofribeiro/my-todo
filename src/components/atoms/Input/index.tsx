import { Input } from "./styles";
import { AtomInputType } from "./types";

const AtomInput = ({ placeholder, onFocus }: AtomInputType) => {
    return (
        <Input placeholder={placeholder} placeholderTextColor={'#9D9086'} onFocus={onFocus} />
    );
}

export default AtomInput;