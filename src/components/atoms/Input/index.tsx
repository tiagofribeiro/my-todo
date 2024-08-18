import Animated, { measure, runOnJS, runOnUI, useAnimatedRef, useSharedValue } from "react-native-reanimated";

import { Input } from "./styles";
import { AtomInputType } from "./types";
import { useAppContext } from "../../../context/app";
import { WHITE_PALACE } from "../../../utils/global/colors";

const AtomInput = ({ placeholder, onFocus }: AtomInputType) => {
    const { setCurrentInputY } = useAppContext();

    const inputRef = useAnimatedRef();

    const position = useSharedValue<number>(0);

    const measurePosition = () => {
        runOnUI(() => {
            const measurement = measure(inputRef);

            if (measurement === null) {
                return;
            }

            position.value = measurement.pageY

            // context.scrollTo()

            runOnJS(setCurrentInputY)(measurement.pageY);
        })();
    };

    // const savePosition = async (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    //     event.target.measure((x, y, width, height, pageX, pageY) => {
    //         appContext.setCurrentInputY(pageY);
    //     })
    // }

    return (
        <Animated.View ref={inputRef}>
            <Input
                placeholder={placeholder}
                placeholderTextColor={WHITE_PALACE.dark}
                onFocus={measurePosition}
            />
        </Animated.View>
    );
}

export default AtomInput;