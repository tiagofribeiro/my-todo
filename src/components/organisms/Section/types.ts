import { TaskType } from "../../../context/types";

export type SectionType = {
    inline?: boolean;
    title?: string;
    list: TaskType[];
}