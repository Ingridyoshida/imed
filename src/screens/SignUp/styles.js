import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:#63C2D1;
    flex:1;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

export const FirstQuiz = styled.View`
    background-color:#63C2D1;
    flex:1;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 30px;
 `;

export const SecondQuiz = styled.View`
    background-color:#63C2D1;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
`;

export const Scroll = styled.ScrollView``;

export const ThirdPhoto = styled.View`
    flex: 1;
    background-color:#63C2D1;
    justify-content: center;    
    align-items: center;
    padding-bottom: 30px;

`;

export const ImageCamera = styled.View`
    width: 100%;
    height: 220px;
    background-color: #63C2D1;
    margin-top: 20px;
    margin-bottom: 35px;
`;

export const SvgPhoto = styled.View`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background-color: #fff;
    margin-top: 15px;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
`;

export const PhotoText = styled.Text`
    font-size:18px;
    color: #fff; 
    justify-content: center;
    align-items: center;
`;

export const  ImageButton = styled.TouchableOpacity`
    width: 30%;
    height:30px;
    background-color:#268596;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
`;

export const Header = styled.View`
    width: 100%;
    height: 40px;
    margin-left: 15px;
`;

export const SingBoxText = styled.View`
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;
export const SingText = styled.Text`
    font-size:25px;
    color: #fff;   
`;

export const InputArea = styled.View`
    width:100%;
    padding:30px;
`;

export const QuizBoxText = styled.View`
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;
export const QuizText = styled.Text`
    font-size:18px;
    color: #fff;   
    margin-top: 5px;
`;


export const CustomButton = styled.TouchableOpacity`
    width: 50%;
    height:60px;
    background-color: #268596;
    border-radius:30px;
    justify-content: center;
    align-items: center;
    margin-top:15px;
`;

export const CustomButtonText = styled.Text`
    font-size:18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

 export const SignMessageButtonText = styled.Text`
    font-size:16px;
    color:#268596;
 `;

 export const SignMessageButtonBold  = styled.Text`
    font-size: 16px;
    color:#268596;
    font-weight: bold;
    margin-left:5px;
 `;




  