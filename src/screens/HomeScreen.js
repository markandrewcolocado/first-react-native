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
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => props.navigation.navigate('Square')}
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
