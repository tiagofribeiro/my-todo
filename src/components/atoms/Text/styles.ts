import styled from "styled-components/native";

import { FontSizes, FontFamilies } from "./types";

type TextType = {
    $size: FontSizes;
    $family: FontFamilies;
    $color: string;
}

const Text = styled.Text<TextType>(({ $size, $family, $color }) => `
    font-family: ${$family};
    font-size: ${$size}px;
    color: ${$color};
`);


export { Text }