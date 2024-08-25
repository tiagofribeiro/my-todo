import { Area } from "./styles";
import { BackButtonType } from "./types";
import AtomButton from "../../atoms/Button";
import ArrowLeft from "../../../../assets/icons/arrow-left.svg";

const icon = {
    svg: ArrowLeft,
    position: "left",
}

const BackButton = ({ backFunction }: BackButtonType) => {
    return (
        <Area>
            <AtomButton
                center
                transparent
                label={'voltar'}
                icon={icon}
                press={backFunction}
            />
        </Area>
    );
}

export default BackButton;