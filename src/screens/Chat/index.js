import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    BackButton,
    HeaderText 
        
} from './styles';

import ClickBack from '../../assets/back2.svg';

export default () => {
    const navigation = useNavigation();

    const handleGobackClick = () => {
        navigation.goBack();
    }

    return (
       

        <Container>
            <Header>
                <BackButton onPress={handleGobackClick} underlayColor="#4EADBE" activeOpacity={0.3} >
                <ClickBack width="30" height="30" />
                </BackButton>
                <HeaderText>Chat</HeaderText>
            </Header>
          
        </Container>
    );
}