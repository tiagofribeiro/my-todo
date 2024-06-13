import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export type AtomInputType = {
    placeholder?: string;
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
