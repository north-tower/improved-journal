import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DemoScreen from './screens/DemoScreen';
import Paywall from './screens/Paywall';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
  Signup: undefined;
  Signin: undefined;
  Success: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (

    <NavigationContainer>
      <Stack.Navigator>
      {session && session.user ? (
      <>
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

      </>
       
      ) : (
        <>
        <Stack.Screen name="Signin" component={But} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Signup" component={SignUp} options={{
            headerShown: false,
          }} />
           <Stack.Screen name="Success" component={Success} />
        </>
        
      )}

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
