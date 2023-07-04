import React from 'react'
import { Button, Text, View } from 'react-native'

const ColorCounter = ({ label, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Button title={`More ${label}`} onPress={onIncrease} />
      <Button title={`Less ${label}`} onPress={onDecrease} />
    </View>
  )
}

export default ColorCounter
