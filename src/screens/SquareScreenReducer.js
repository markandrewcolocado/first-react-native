import React, { useReducer } from 'react'
import { Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'
const COLOR_INCREMENT = 15

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: COLOR_INCREMENT || -COLOR_INCREMENT }
  // by convention, the action should always contain { type: 'change_description', payload: value }
  switch (action.type) {
    case 'change_red':
      return validateLimits(state.red, state, 'red', action.payload)
    case 'change_green':
      return validateLimits(state.green, state, 'green', action.payload)
    case 'change_blue':
      return validateLimits(state.blue, state, 'blue', action.payload)
    default:
      return state
  }
}

/**
 * Validates the changes to the state to not exceed below zero and above 255
 * @param {number} value
 * @param {object} state
 * @param {string} color
 * @param {number} increment
 * @returns
 */
const validateLimits = (value, state, color, increment) => {
  if (increment === COLOR_INCREMENT) {
    return value > 255 - COLOR_INCREMENT - 1
      ? { ...state, [color]: 255 }
      : { ...state, [color]: value + increment }
  } else {
    return value < 0 + COLOR_INCREMENT + 1
      ? { ...state, [color]: 0 }
      : { ...state, [color]: value + increment }
  }
}

const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        label="Red"
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        label="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        label="Blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>{`(${red}, ${green}, ${blue})`}</Text>
    </View>
  )
}

export default SquareScreenReducer
