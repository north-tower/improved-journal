import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Paywall">;


const Paywall = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={tw`bg-[#1A2F44] flex-1`}>
    <View style={tw`m-10 space-y-2`}>
        <Text style={tw`text-2xl text-center uppercase text-white font-bold`}>
            upgrade
        </Text>
        <Text style={tw`text-center text-white`}>
            Upgrade to Pro
        </Text>
    </View>

    <TouchableOpacity onPress={navigation.goBack}>
        {/* <Ionicons name="" size={32} color="#E5962D" /> */}
        {/* <Ionicons name="person-circle" size={24} color="#E5962D" /> */}
CLOSE
    </TouchableOpacity>
  </ScrollView>
  )
}

export default Paywall