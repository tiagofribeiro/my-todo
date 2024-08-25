import { Area } from "./styles";
import { FormType } from "./types";
import AtomButton from "../../atoms/Button";
import AtomInput from "../../atoms/Input";

const Form = ({
    fields,
    submit,
    forgot,
}: FormType) => {
    return (
        <Area>
            {fields.map((field, index) => {
                return (
                    <AtomInput
                        key={index}
                        placeholder={field.placeholder}
                        onFocus={field.onFocus}
                    />
                )
            })}
            <AtomButton label={submit.label} press={submit.press} />
            {forgot &&
                <AtomButton
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