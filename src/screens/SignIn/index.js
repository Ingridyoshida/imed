import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';

import { Container,
         InputArea,
         CustomButton,
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonBold,
         ForgotMessageButton,
         ForgotMessageButtonText

} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import MedicoLogo from '../../assets/medicine5.svg';
import EmailIcon from '../../assets/o-email.svg';
import LockIcon from '../../assets/cadeado.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);

            if(json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });
                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert('E-mail e/ou senha incorretos!');
            }

        } else {
            alert("preencha os campos!");
        }
    }

    const handleForgotClick = () => {
        navigation.reset({
            routes: [{name:'Forgot'}]
        });
    } 

    const handleMessageButtonClick = () => { 
        navigation.reset({
            routes: [{name:'SignUp'}]
        });
    }
    

    return (

        <Container>
           <MedicoLogo width="100%" height="160" />

            <InputArea>
                <SignInput
                        IconSvg={EmailIcon}
                        placeholder="E-mail"
                        value={emailField}
                        onChangeText={t=>setEmailField(t)}
                    />

                    <SignInput
                        IconSvg={LockIcon}
                        placeholder="Senha"
                        value={passwordField}
                        onChangeText={t=>setPasswordField(t)}
                        password={true}
                    />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            
         <ForgotMessageButton onPress={handleForgotClick}>
                <ForgotMessageButtonText>Esqueceu a senha? </ForgotMessageButtonText>
           </ForgotMessageButton>

            </InputArea>

         

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonBold>Cadastre-se</SignMessageButtonBold>
            </SignMessageButton>

        </Container>

    );
}