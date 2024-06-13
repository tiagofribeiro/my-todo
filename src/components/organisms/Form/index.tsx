import { Area } from "./styles";
import { FormType } from "./types";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const Form = ({ fields, submit }: FormType) => {
    return (
        <Area>
            {
                fields.map((field, index) => {
                    return <Input key={index} placeholder={field.placeholder} onFocus={field.onFocus} />
                })
            }
            <Button label={submit.label} press={submit.press} />
        </Area>
    );
}

export default Form;