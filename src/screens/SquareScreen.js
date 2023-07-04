import React, { useState } from 'react'
import { Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'
const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [red, setRed] = useState(Math.floor(Math.random() * 256))
  const [green, setGreen] = useState(Math.floor(Math.random() * 256))
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256))

  function increaseNumber(color, setter) {
    color > 255 - COLOR_INCREMENT - 1
      ? setter(255)
      : setter(color + COLOR_INCREMENT)
  }

  function decreaseNumber(color, setter) {
    color < 0 + COLOR_INCREMENT + 1
      ? setter(0)
      : setter(color - COLOR_INCREMENT)
  }

  return (
    <View>
      <ColorCounter
        label="Red"
        onIncrease={() => {
          increaseNumber(red, setRed)
        }}
        onDecrease={() => {
          decreaseNumber(red, setRed)
        }}
      />
      <ColorCounter
        label="Green"
        onIncrease={() => {
          increaseNumber(green, setGreen)
        }}
        onDecrease={() => {
          decreaseNumber(green, setGreen)
        }}
      />
      <ColorCounter
        label="Blue"
        onIncrease={() => {
          increaseNumber(blue, setBlue)
        }}
        onDecrease={() => {
          decreaseNumber(blue, setBlue)
        }}
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

export default SquareScreen
