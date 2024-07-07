import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import  Ionicons  from '@expo/vector-icons/Ionicons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'


export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;





export class Paywall extends Component {
  render() {
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

        <TouchableOpacity>
            {/* <Ionicons name="" size={32} color="#E5962D" /> */}
            {/* <Ionicons name="person-circle" size={24} color="#E5962D" /> */}
CLOSE
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default Paywall