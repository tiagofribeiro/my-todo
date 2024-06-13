import { SlideInLeft, SlideInRight, SlideInUp, SlideOutDown, SlideOutLeft, SlideOutRight } from "react-native-reanimated";

import { FormType } from "../../organisms/Form/types";

export type LoginTemplateType = {
    title: string;
    subtitle: string;
    form: FormType;
    entering?: typeof SlideInRight;
    exiting?: typeof SlideOutLeft;
}