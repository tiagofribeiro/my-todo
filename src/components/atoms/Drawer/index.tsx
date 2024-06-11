import { forwardRef, useCallback, useEffect, useImperativeHandle } from "react";
import { useWindowDimensions } from "react-native";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Content } from "./styles";

type AtomDrawerType = {
    children: JSX.Element;
}

export type AtomDrawerRef = {
    scrollTo: (position: number) => void;
}

const AtomDrawer = forwardRef<AtomDrawerRef, AtomDrawerType>(({ children }, ref) => {
    const { height: WINDOW_HEIGHT } = useWindowDimensions();

    const translateY = useSharedValue(0);
    const positionY = useSharedValue(0);

    const scrollTo = useCallback((destination: number) => {
        'worklet';
        translateY.value = withSpring(destination, { damping: 20 });
    }, [])

    const gesture = Gesture.Pan()
        .onStart(() => {
            positionY.value = translateY.value;
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + positionY.value;
            translateY.value = Math.max(translateY.value, -WINDOW_HEIGHT + 50);
        });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        };
    });

    
    useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo])

    useEffect(() => {
        scrollTo(-WINDOW_HEIGHT / 1.5)
    }, [])

    return (
        <GestureDetector gesture={gesture}>
            <Content $windowHeight={WINDOW_HEIGHT} style={animatedStyle}>
                {children}
            </Content>
        </GestureDetector>
    );
})

export default AtomDrawer;