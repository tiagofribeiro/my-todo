import { AtomButtonType } from "../../atoms/Button/types";
import { AtomInputType } from "../../atoms/Input/types"

export type FormType = {
    fields: AtomInputType[];
    submit: AtomButtonType;
    forgot?: () => any;
}