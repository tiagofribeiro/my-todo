import styled from "styled-components/native";

const HeaderText = styled.Text`
    font-family: Archivo-ExtraBold;
`;

const BodyText = styled.Text`
    font-family: Archivo-Regular;
`;

const ButtonText = styled.Text`
    font-family: Archivo-Semibold;
    font-size: 16px;
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

export { Header3, Body1, Body2, ButtonText }