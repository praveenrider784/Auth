import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
   <StackNavigation />
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
