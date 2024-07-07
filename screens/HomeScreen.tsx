import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
import ActionRow from '../components/ActionRow'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 relative`}> 
    <ScrollView>
        <TouchableOpacity style={tw`absolute z-50 top-5 right-10 items-center`}>
            <Ionicons name="person-circle" size={24} color="#E5962D" />
            <Text style={tw`text-center text-[#E5962D]`}>User</Text>
        </TouchableOpacity>
     
      <Image 
        source={{ uri: "https://i.postimg.cc/zB2Hs1SP/e14NE49.png" }} 
        style={tw`w-full h-64`}
        onLoad={() => console.log('Image loaded')} 
        onError={() => console.log('Image failed to load')} 
        />

        <ActionRow 
        title="Track Workout"
        screen="Demo"
        color="#E5962D"
        icon="fitness"
        vertical
        />
        
    
</ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen