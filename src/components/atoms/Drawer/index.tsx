import { forwardRef, useCallback, useEffect, useImperativeHandle } from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { SlideInDown, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Content } from "./styles";
import { AtomDrawerRef, AtomDrawerType } from "./types";

const AtomDrawer = forwardRef<AtomDrawerRef, AtomDrawerType>(({ tag, children }, ref) => {
    const { height: WINDOW_HEIGHT } = useWindowDimensions();

    const translateY = useSharedValue(0);
    const positionY = useSharedValue(0);

    const currentY = useCallback(() => {
        'worklet';
        return translateY.value;
    }, [])

    const scrollTo = useCallback((destination: number) => {
        'worklet';
        translateY.value = withSpring(destination, { damping: 50, stiffness: 70 });
    }, [])


    const gesture = Gesture.Pan()
        .onStart(() => {
            positionY.value = translateY.value;
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + positionY.value;

            translateY.value = Math.max(translateY.value, WINDOW_HEIGHT / 10);
            translateY.value = Math.min(translateY.value, WINDOW_HEIGHT / 2.2);
        });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        };
    });

    useImperativeHandle(ref, () => ({ currentY, scrollTo }), [currentY, scrollTo])

    useEffect(() => {
        scrollTo(WINDOW_HEIGHT / 4);
    }, [])

    return (
        <GestureDetector gesture={gesture}>
            <Content
                $windowHeight={WINDOW_HEIGHT}
                style={animatedStyle}
                entering={SlideInDown.duration(400)}
            >
                {children}
            </Content>
        </GestureDetector>
    );
})

export default AtomDrawer;