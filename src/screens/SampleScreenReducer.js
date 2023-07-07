import React, { useReducer } from 'react'
import { Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
      return { ...state, green: state.green + action.amount }
    case 'blue':
      return { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

const SampleScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        label="Red"
        onIncrease={() => {
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }}
      />
      <ColorCounter
        label="Green"
        onIncrease={() => {
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }}
      />
      <ColorCounter
        label="Blue"
        onIncrease={() => {
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>Sample Reducer</Text>
    </View>
  )
}

export default SampleScreenReducer
