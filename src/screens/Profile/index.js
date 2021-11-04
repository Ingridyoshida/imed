import React from 'react';
import styled from 'styled-components/native';
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

export default (props) => {
    const navigation = useNavigation();

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    const handleExamsClick = () => {
        props.navigation.navigate('Exams');
    } 

    const handleUpexamsClick = () => {
        props.navigation.navigate('Upexams');
    } 

    const handleUserdataClick = () => {
        props.navigation.navigate('Userdata');
    } 

    const handleChatClick = () => {
        props.navigation.navigate('Chat');
    } 
    
    return (
        <Container>  
             <Exames onPress={handleExamsClick} underlayColor="#4EADBE" activeOpacity={0.3} >
                <UpExames>
                    <ExamesText>Exames</ExamesText>
                    <Documents width="28" height="28" fill="#FFFFFF" />
                </UpExames>
            </Exames>
            
            <Exames onPress={handleUpexamsClick} underlayColor="#4EADBE" activeOpacity={0.3} >
                <UpExames>
                    <UpExamesText>Importar Exames</UpExamesText>
                    <Medicine width="28" height="28" fill="#FFFFFF" />
                </UpExames>
            </Exames>

            <ItemUser  onPress={handleUserdataClick} underlayColor="#4EADBE" activeOpacity={0.3}>
                <ItemUserSearch>
                    <UserSearch>Dados do usuario</UserSearch>
                    <User width="28" height="28" fill="#FFFFFF" />
                </ItemUserSearch>
            </ItemUser>
            
            <ItemChat onPress={handleChatClick} underlayColor="#4EADBE" activeOpacity={0.3}>
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