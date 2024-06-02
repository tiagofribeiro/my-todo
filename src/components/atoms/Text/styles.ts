import styled from "styled-components/native";

const HeaderText = styled.Text`
    font-family: Archivo-ExtraBold;
`;

const BodyText = styled.Text`
    font-family: Archivo-Regular;
`;

const ButtonText = styled.Text`
    font-family: Archivo-Semibold;
`;

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

const Button1 = styled(ButtonText)`
    font-size: 16px;
`;

export { Header3, Body1, Body2 }