import { useState } from "react";

import { Touchable } from "./styles";
import { AtomCheckType } from "./types";

import CheckOn from "../../../../assets/icons/check-on.svg";
import CheckOff from "../../../../assets/icons/check-off.svg";

const AtomCheck = ({ selected }: AtomCheckType) => {
    const [checked, setChecked] = useState<boolean>(selected);

    return (
        <Touchable onPress={() => setChecked(!checked)}>
            {checked ? <CheckOn /> : <CheckOff />}
        </Touchable>
    );
}

export default AtomCheck;