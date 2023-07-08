import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    justifyContent: 'center', // center, space-between, space-around, flex-start, flex-end
    flexDirection: 'row', // column, column-reverse, row, row-reverse
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    width: 130,
  },
})

export default BoxScreen
