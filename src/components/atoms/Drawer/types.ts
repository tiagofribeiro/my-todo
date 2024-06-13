import { ReactNode } from "react";
import { ChildrenType } from "../../../utils/global/types";

export type AtomDrawerRef = {
    currentY: () => number;
    scrollTo: (position: number) => void;
}

export type AtomDrawerType = ChildrenType & {
    tag?: string;
}