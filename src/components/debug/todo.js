// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function Todo() {
  return (
    <View style={styles.container}>
      <Text>TODO: implement this component</Text>
    </View>
  )
}
