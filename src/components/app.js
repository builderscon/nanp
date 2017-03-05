// @flow

import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {COLOR} from '../constants'
// Import Reader from './reader'
import Button from './button'
import StatusBar from './status-bar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 5,
  },
  button: {
    backgroundColor: COLOR.SOFT_BLUE,
    flex: 1,
  },
  title: {
    color: COLOR.WHITE,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'avenir',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.logo} />
      <Button
        onPress={() => {
          console.log('Scan is tapped')
        }}
        title="Scan"
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
    </View>
  )
}
