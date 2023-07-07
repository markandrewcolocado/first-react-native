import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Homescreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => props.navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter State Demo"
        onPress={() => props.navigation.navigate('CounterState')}
      />
      <Button
        title="Go to Counter Reducer Demo"
        onPress={() => props.navigation.navigate('CounterReducer')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button
        title="Go to Square State Demo"
        onPress={() => props.navigation.navigate('SquareState')}
      />
      <Button
        title="Go to Square Reducer Demo"
        onPress={() => props.navigation.navigate('SquareReducer')}
      />
      <Button
        title="Go to Sample Reducer Demo"
        onPress={() => props.navigation.navigate('SampleReducer')}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => props.navigation.navigate('Text')}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
