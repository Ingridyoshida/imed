import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Swiper from 'react-native-swiper';
import ImagePicker from 'react-native-image-crop-picker';


import { UserContext } from '../../contexts/UserContext';

import { 
        Scroll,
        Header,
        SingBoxText,
        SingText,
        InputArea,
        QuizBoxText,
        QuizText,
        FirstQuiz,
        SecondQuiz,
        ThirdPhoto,
        PhotoText,
        SvgPhoto,
        ImageButton,
        ImageButtonText,
        CustomButton,
        CustomButtonText


} from './styles';

import SignInput from '../../components/SignInput';

import Api from '../../Api';

import Back from '../../assets/back2.svg';
import MedicoLogo from '../../assets/cadastro.svg';
import PersonIcon from '../../assets/nome.svg';
import EmailIcon from '../../assets/o-email.svg';
import LockIcon from '../../assets/cadeado.svg';
import Cellphone from '../../assets/cellphone1.svg';
import Remedy from '../../assets/remedy.svg';
import DNA from '../../assets/dna.svg';
import Esteto from '../../assets/esteto.svg';
import Avatar from '../../assets/avatar2.svg';


export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [NameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert("Erro: "+res.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }

    return (
        <Swiper>
         <Scroll>      
        <FirstQuiz>
         
        <Header>
            <Back width="40" height="35"
                   onPress={handleMessageButtonClick} />
             </Header>

           <MedicoLogo width="100%" height="160" />

            <InputArea>

            <SingBoxText>
                <SingText>Dados Pessoais</SingText>
            </SingBoxText>

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Nome Completo"
                    value={NameField}
                    onChangeText={t=>setNameField(t)} />

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Data de Nascimento"
                    value={NameField}
                    onChangeText={t=>setNameField(t)} />    

                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)} />

                <SignInput
                    IconSvg={Cellphone}
                    placeholder="Telefone com DDD"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)} />    

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Senha"
                    value={passwordField}
                    onChageText={t=>setPasswordField(t)}
                    password={true} />

                
                <SignInput
                  IconSvg={LockIcon}
                  placeholder="Confirmar Senha"
                  value={passwordField}
                  onChageText={t=>setPasswordField(t)}
                  password={true} />    
            
            </InputArea>
       
        </FirstQuiz>
        </Scroll>
      <Scroll> 
       <SecondQuiz>

       <InputArea>
           <MedicoLogo width="100%" height="160" />
       <SingBoxText>
              <SingText>Dados Médicos</SingText>
       </SingBoxText>

          <QuizBoxText>
                <QuizText>Você tem alguma comorbidade?</QuizText>
            </QuizBoxText>   
              <SignInput
                  IconSvg={Esteto}
                  placeholder="Digite aqui"
                  value={emailField}
                  onChangeText={t=>setEmailField(t)} />   

            <QuizBoxText>
                <QuizText>Remédio controlado?</QuizText>
            </QuizBoxText>    
              <SignInput
                  IconSvg={Remedy}
                  placeholder="Digite o nome do remédio"
                  value={NameField}
                  onChangeText={t=>setNameField(t)} />

            <QuizBoxText>
                <QuizText>Alergia a algum remédio?</QuizText>
            </QuizBoxText>
              <SignInput
                  IconSvg={Remedy}
                  placeholder="Digite o nome do remédio"
                  value={emailField}
                  onChangeText={t=>setEmailField(t)} />

            <QuizBoxText>
                <QuizText>Você tem alguma alergia?</QuizText>
            </QuizBoxText>   
              <SignInput
                  IconSvg={DNA}
                  placeholder="Alergias"
                  value={emailField}
                  onChangeText={t=>setEmailField(t)} />    
    
          </InputArea>
                    
       </SecondQuiz>
       </Scroll> 

       <ThirdPhoto>
               
                <SvgPhoto>
                     <Avatar width="100%" height="150" />
                </SvgPhoto>
                <ImageButton onPress={choosePhotoFromLibrary}>
                      <PhotoText>Foto</PhotoText>
                </ImageButton>
        
             <CustomButton onPress={handleSignClick}>
                  <CustomButtonText>CADASTRAR</CustomButtonText>
            </CustomButton>

       </ThirdPhoto>

      </Swiper>

  
            
       

      

    );
}