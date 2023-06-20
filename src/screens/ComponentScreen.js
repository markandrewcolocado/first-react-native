import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Tugas'
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.nameStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
})

export default ComponentsScreen
