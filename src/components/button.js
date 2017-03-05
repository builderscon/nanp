// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

type Props = {
  onPress: Function,
  title: string,
  buttonStyle?: number,
  titleStyle?: number,
}

export default function Button(props: Props) {
  const {
    onPress,
    title,
    buttonStyle,
    titleStyle,
  } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <View style={styles.textContainer}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
