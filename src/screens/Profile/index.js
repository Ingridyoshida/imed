import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ExamesText,
    Exames,
    UpExames,
    UpExamesText,
    ItemUser,
    ItemUserSearch,
    UserSearch,
    ItemChat,
    ChatBox,
    ChatText, 
    ItemExit,
    ExitBox,
    ExitText
        
} from './styles';

import Documents from '../../assets/exames.svg';
import Medicine from '../../assets/upload.svg';
import User from '../../assets/avatar4.svg';
import Chat from '../../assets/chat.svg';
import Exit from '../../assets/exit.svg';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    const handleExamsClick = () => {
        navigation.reset({
            routes: [{name:'Exams'}]
        });
    } 
    
    return (
        <Container>  
             <Exames onPress={()=>{}} underlayColor="#4EADBE" activeOpacity={0.3} >
                <UpExames>
                    <ExamesText>Exames</ExamesText>
                    <Documents width="28" height="28" fill="#FFFFFF" />
                </UpExames>
            </Exames>
            
            <Exames onPress={handleExamsClick} underlayColor="#4EADBE" activeOpacity={0.3} >
                <UpExames>
                    <UpExamesText>Importar Exames</UpExamesText>
                    <Medicine width="28" height="28" fill="#FFFFFF" />
                </UpExames>
            </Exames>

            <ItemUser  onPress={()=>{}} underlayColor="#4EADBE" activeOpacity={0.3}>
                <ItemUserSearch>
                    <UserSearch>Dados do usuario</UserSearch>
                    <User width="28" height="28" fill="#FFFFFF" />
                </ItemUserSearch>
            </ItemUser>
            
            <ItemChat onPress={()=>{}} underlayColor="#4EADBE" activeOpacity={0.3}>
                <ChatBox>
                    <ChatText>Chat</ChatText>
                    <Chat width="28" height="28" fill="#FFFFFF" />
                </ChatBox>
            </ItemChat>
            

           <ItemExit onPress={handleLogoutClick} underlayColor="#4EADBE" activeOpacity={0.3}>
               <ExitBox>
                  <ExitText>Sair</ExitText>
                  <Exit width="28" height="28" fill="#FFFFFF" />
               </ExitBox>       
           </ItemExit>
           
        </Container>
    );
}