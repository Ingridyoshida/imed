import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    ForgotBox,
    ForgotMessageTextBold,
    Input,
    ForgotButton,
    ForgotTextArea
 
        
} from './styles';

import Api from '../../Api';

import MedicoLogo from '../../assets/forgot.svg';
import ClickBack from '../../assets/back2.svg';
import EmailIcon from '../../assets/o-email.svg';


export default () => {
    const navigation = useNavigation();

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }
    

    return (
       

        <Container>
            <Header> 
                <ClickBack
                 width="100%" height="40"
                 onPress={handleLogoutClick} />
            </Header>

             <MedicoLogo width="100%" height="180" />

            <ForgotBox> 
            <ForgotMessageTextBold>Esqueceu sua senha?</ForgotMessageTextBold>
            <Input
                IconSvg={EmailIcon}
                placeholder="Digite seu e-mail"
            
            />
                <ForgotButton>
                   <ForgotTextArea>Enviar</ForgotTextArea>
                </ForgotButton>
            </ForgotBox>

          
        </Container>
    );
}