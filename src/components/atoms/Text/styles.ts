import styled from "styled-components/native";

type TextType = {
    $color: string;
}

const HeaderText = styled.Text<TextType>(({ $color }) => `
    font-family: Archivo-ExtraBold;
    color: ${$color};
`);

const BodyText = styled.Text<TextType>(({ $color }) => `
    font-family: Archivo-Regular;
    color: ${$color};
`);

const ButtonText = styled.Text<TextType>(({ $color }) => `
    font-family: Archivo-SemiBold;
    font-size: 16px;
    line-height: 20px;
    color: ${$color};
`);

//

const Header3 = styled(HeaderText)`
    font-size: 20px;
`;

const Body1 = styled(BodyText)`
    font-size: 16px;
`;

const Body2 = styled(BodyText)`
    font-size: 14px;
`;

export { Header3, Body1, Body2, ButtonText }