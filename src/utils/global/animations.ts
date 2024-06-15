import { SlideInLeft, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";

export const TransitionRightAnimation = {
    entering: SlideInRight,
    exiting: SlideOutLeft,
}

export const TransitionLeftAnimation = {
    entering: SlideInLeft,
    exiting: SlideOutRight,
}