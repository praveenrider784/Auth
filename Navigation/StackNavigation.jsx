import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/OnboardingScreen';
import Register from '../Screens/Register';
import Code from '../Screens/Code';
import UsernameScreen from '../Screens/UsernameScreen';
import FinalScreen from '../Screens/FinalScreen';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (

      <Stack.Navigator>
        
        <Stack.Screen name="Onbaordingscreen" component={OnboardingScreen} options={{headerShown:false}} />
        <Stack.Screen name="RegisterScreen" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="CodeScreen" component={Code} options={{headerShown:false}} />
        <Stack.Screen name="UsernameScreen" component={UsernameScreen} options={{headerShown:false}} />
        <Stack.Screen name="FinalScreen" component={FinalScreen} options={{headerShown:false}} />
        
      </Stack.Navigator>

  )
}

export default StackNavigation