import { ReactNode } from "react"

export type ChildrenType = {
    children: ReactNode;
}

export type ColorsType = {
    lightest: string;
    lighter: string;
    light: string;
    normal: string;
    dark: string;
    darker: string;
    darkest: string;
}

export type TagColorsType = {
    [key: string]: string | undefined;
}