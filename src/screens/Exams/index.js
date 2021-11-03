import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


import {
    Container,
    Header,
    BackButton,
    HeaderText,
    Body,
    PdfExams,
    PdfTextArea,
    PdfText
           
} from './styles';

import Api from '../../Api';

import Pdf from '../../assets/pdf.svg';
import ClickBack from '../../assets/back2.svg';

export default () => {

    const navigation = useNavigation();

    const handleProfileClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'Profile'}]
        });
    }


    return (
        <Container>
            <Header>
                <BackButton  onPress={handleProfileClick} underlayColor="#4EADBE" activeOpacity={0.3}>
                <ClickBack width="30" height="30" />
                </BackButton>
                <HeaderText>Importe seus Exames</HeaderText>
            </Header>
            <Body>
            <PdfTextArea>
               <PdfText>Clique para importar</PdfText>
          </PdfTextArea>
                <PdfExams>
                    <Pdf width="60" height="60" fill="#FFFFFF" />
                </PdfExams>
            </Body>
        </Container>
    );
}