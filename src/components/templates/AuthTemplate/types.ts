import { SlideInRight, SlideOutLeft } from "react-native-reanimated";

import { FormType } from "../../organisms/Form/types";

export type LoginTemplateType = {
    back?: boolean;
    backFunction?: () => void;
    title: string;
    subtitle: string;
    form: FormType;
    entering?: typeof SlideInRight;
    exiting?: typeof SlideOutLeft;
}