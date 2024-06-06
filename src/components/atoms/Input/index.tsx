import { Input } from "./styles";

type AtomInputType = {
    placeholder?: string;
}

const AtomInput = ({ placeholder }: AtomInputType) => {
    return (
        <Input placeholder={placeholder} placeholderTextColor={'#9D9086'}/>
    );
}

export default AtomInput;