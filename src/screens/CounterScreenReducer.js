import React, { useReducer } from 'react'
import { Button, View, Text } from 'react-native'

const COUNT_INCREMENT = 1

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'change_description', payload: number}
  return { ...state, count: state.count + action.payload }
}

const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  console.log(state.count)
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase', payload: COUNT_INCREMENT })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease', payload: -1 * COUNT_INCREMENT })
        }}
      />
      <Text>{`Count: ${state.count}`}</Text>
    </View>
  )
}

export default CounterScreenReducer
