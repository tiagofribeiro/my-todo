import { ChildrenType } from "../../../utils/global/types";

export type AtomCardType = ChildrenType & {
    color?: string;
    tag?: {
        emoji: string;
        color: string;
    };
    press?: () => any;
}