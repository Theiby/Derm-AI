import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Opening2 from './src/Opening2';
import Opening from './src/Opening';
import Main from './src/Main';
import Profile from './src/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from './src/Camera';
import Advices from './src/Advices';
import Setting from './src/Setting';
import Login from './src/Login';
import Sign from './src/Sign';
import ChangeType from './src/ChangeType';
import Chatbot from './src/Chatbot';




const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Opening" component={Opening} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Opening2" component={Opening2} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Advices" component={Advices}/>
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ChangeType" component={ChangeType} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
    </Stack.Navigator>
  );
}

export default function RootComponent() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
