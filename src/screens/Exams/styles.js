import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #63C2D1;

`;

export const Header = styled.View`
    flex-direction: row;
    background-color: #fff;
    height: 45px;
    padding-top:5px;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
`;

export const BackButton = styled.TouchableOpacity`
    width: 45px;
    height: 40px;
`;

export const HeaderText = styled.Text`
    width: 80%;
    height: 40px;
    font-size: 22px;
    color: #63C2D1;
    padding-left: 22px;
    align-items: center;
`;

export const Body = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const PdfExams = styled.TouchableOpacity`
    width:150px;
    height: 150px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border:1px dashed;
`;

export const PdfTextArea = styled.View`
    width:100%;
    height: 40px;
    background-color: #63C2D1;
    justify-content: center;
    align-items: center;
`;

export const PdfText = styled.Text`
    font-size: 18px;
    color: #fff;
`;