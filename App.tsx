import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DemoScreen from './screens/DemoScreen';
import Paywall from './screens/Paywall';

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerShown: false
        }} />
          <Stack.Screen name="Demo" component={DemoScreen} 
        options={{
          headerShown: false
        }} />
         <Stack.Screen name="Paywall" component={Paywall} 
        options={{
          headerShown: false,
          presentation: 'modal'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
   
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
