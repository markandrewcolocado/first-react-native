import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const BoxExerciseScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 100,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  boxTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    // top: 50,
    marginTop: 50,
  },
  boxThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
})

export default BoxExerciseScreen
