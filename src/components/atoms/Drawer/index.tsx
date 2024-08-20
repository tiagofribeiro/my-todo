import { forwardRef, useCallback, useEffect, useImperativeHandle } from "react";
import { Keyboard, useWindowDimensions } from "react-native";
import { SlideInDown, useAnimatedKeyboard, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Content } from "./styles";
import { AtomDrawerRef, AtomDrawerType } from "./types";
import { useAppContext } from "../../../context/app";

const AtomDrawer = forwardRef<AtomDrawerRef, AtomDrawerType>(({ tag, children }, ref) => {
    const { currentInputY, drawerY } = useAppContext();
    const WINDOW_HEIGHT = useWindowDimensions().height;

    const translateY = useSharedValue(0);
    const positionY = useSharedValue(0);

    const currentY = useCallback(() => {
        'worklet';
        return translateY.value;
    }, [])

    const scrollTo = useCallback((destination: number) => {
        'worklet';
        translateY.value = withSpring(destination, { damping: 80, stiffness: 80 });
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

        const showSubscription = Keyboard.addListener('keyboardDidShow', (event) => {
            const availableScreen = WINDOW_HEIGHT - event.endCoordinates.height;

            console.log(currentInputY)

            const a = drawerY - (currentInputY - event.endCoordinates.screenY + 100);

            if (currentInputY > availableScreen) {
                scrollTo(a)
            }
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            // scrollTo(currentY() + 100)
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
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