import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from '../stacks/MainTab';
import Barber from '../screens/Barber';
import Forgot from '../screens/Forgot';
import Upexams from '../screens/Upexams';
import Exams from '../screens/Exams';
import Userdata from '../screens/Userdata';
import Chat from '../screens/Chat';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Barber" component={Barber} />
        <Stack.Screen name="Upexams" component={Upexams} />
        <Stack.Screen name="Exams" component={Exams} />
        <Stack.Screen name="Userdata" component={Userdata} />
        <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
);