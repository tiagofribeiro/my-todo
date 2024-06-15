import { Area } from "./styles";
import Button from "../../atoms/Button";
import ArrowLeft from "../../../../assets/icons/arrow-left.svg";
import { BackButtonType } from "./types";

const icon = {
    svg: ArrowLeft,
    position: "left",
}

const BackButton = ({ backFunction }: BackButtonType) => {
    return (
        <Area>
            <Button
                transparent
                label={'voltar'}
                icon={icon}
                press={backFunction}
            />
        </Area>
    );
}

export default BackButton;