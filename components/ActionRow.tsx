import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    screen: any;
    color: string;
    requiresPro?: boolean;
    icon?: any;
    vertical?: boolean;
}

const ActionRow = ({
    title,
    screen,
    color,
    requiresPro,
    icon,
    vertical
}: Props) => {
  return (
    <View>
      <Text>ActionRow</Text>
    </View>
  )
}

export default ActionRow