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
    alignItems: 'center', // flex-start, center, flex-end, baseline, stretch(default)
    flexDirection: 'column', // column (default), column-reverse, row, row-reverse
    height: 200,
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    width: 130,
  },
})

export default BoxScreen
