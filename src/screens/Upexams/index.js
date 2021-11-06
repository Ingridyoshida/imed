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

import DocumentPicker from 'react-native-document-picker'

import Pdf from '../../assets/pdf.svg';
import ClickBack from '../../assets/back2.svg';

export default () => {
    const navigation = useNavigation();

    const handleGobackClick = () => {
        navigation.goBack();
    }
    const FileUpload = () => {
            try {
                const res = DocumentPicker.pick({
                  type: [DocumentPicker.types.allFiles],
                })
                console.log(
                  res.uri,
                  res.type, // mime type
                  res.name,
                  res.size,
                )
              } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                  // User cancelled the picker, exit any dialogs or menus and move on
                } else {
                  throw err
                }
              
        }
    
    }
   
    return (
        <Container>
            <Header>
                <BackButton onPress={handleGobackClick} underlayColor="#4EADBE" activeOpacity={0.3} >
                <ClickBack width="30" height="30" />
                </BackButton>
                <HeaderText>Importe seus Exames</HeaderText>
            </Header>
            <Body>
            <PdfTextArea >
               <PdfText>Clique para importar</PdfText>
          </PdfTextArea>
                <PdfExams onPress={FileUpload}>
                    <Pdf width="60" height="60" fill="#FFFFFF" />
                </PdfExams>
            </Body>
        </Container>
    );
}
