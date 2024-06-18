import { Area } from "./styles";
import { FormType } from "./types";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const Form = ({
    fields,
    submit,
    forgot,
}: FormType) => {
    return (
        <Area>
            {fields.map((field, index) => {
                return (
                    <Input
                        key={index}
                        placeholder={field.placeholder}
                        onFocus={field.onFocus}
                    />
                )
            })}
            <Button label={submit.label} press={submit.press} />
            {forgot &&
                <Button
                    transparent
                    marginY={8}
                    label={'esqueceu sua senha?'}
                    press={forgot}
                />
            }
        </Area>
    );
}

export default Form;