import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Exames,
    UpExames,
    IconExames,
    ItemUserSearch,
    UserSearch,
    ItemChat,
    Chat, 
    ItemSair,
    Sair 
        
} from './styles';

import Upload from '../../assets/upload.svg';

import Api from '../../Api';


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
            
            <Exames onPress={()=>{}} underlayColor="#4EADBE" activeOpacity={0.3}>
                 <UpExames>Importar exames</UpExames>
            </Exames>

            <ItemUserSearch onPress={()=>{}} underlayColor="#4EADBE" activeOpacity={0.3}>
                <UserSearch>Dados do usuario</UserSearch>
            </ItemUserSearch>
            <ItemChat onPress={()=>{}} underlayColor="#4EADBE" activeOpacity={0.3}>
                <Chat>Chat</Chat>
            </ItemChat>
            
           <ItemSair onPress={handleLogoutClick} underlayColor="#4EADBE" activeOpacity={0.3}>
              <Sair>Sair</Sair>
           </ItemSair>
           
        </Container>
    );
}