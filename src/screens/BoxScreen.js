import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    // alignItems: 'center', // stretch (default - ignored by child element with position: absolute property), flex-start, center, flex-end, baseline
    // justifyContent: 'center', // center, space-between, space-around, flex-start, flex-end
    // flexDirection: 'row', // column, column-reverse, row, row-reverse
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // alignSelf: 'flex-end',
    // flex: 4,
    // left: 20,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // alignSelf: 'center',
    // flex: 4,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // alignSelf: 'flex-start',
    // flex: 2,
    // bottom: 25,
  },
})

export default BoxScreen
