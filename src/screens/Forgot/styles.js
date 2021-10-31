import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #63C2D1;
    padding-top: 20px;
`;

export const Header = styled.View`
    width: 15px;
    height: 50px;
    background-color: #63C2D1;
    margin-left: 22px;
    margin-bottom: 18px;
`;
 
export const ForgotBox = styled.View`
    width: 100%;
    height: 250px;
    background-color: #63C2D1;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

export const ForgotMessageTextBold = styled.Text`
    font-size: 25px;
    color:#268596;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    font-size: 16px;
    color: #268596;
    width: 290px;
    height:55px;
    background-color:  #83D6E3;
    border: 1px solid  #83D6E3;
    border-radius:30px;
    justify-content: center;
    align-items: center;
    margin: 15px;
    margin-bottom: 32px;
`;

export const ForgotButton = styled.TouchableOpacity`
    width: 150px;
    height:60px;
    background-color: #268596;
    border-radius:30px;
    justify-content: center;
    align-items: center;
`;


export const ForgotTextArea = styled.Text`
    font-size:18px;
    color: #FFF;
`;



















