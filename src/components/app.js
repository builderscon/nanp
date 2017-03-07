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
  listButton: {
    backgroundColor: COLOR.BRIGHT_RED,
    flex: 1,
  },
  scanButton: {
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
          console.log('List is tapped')
        }}
        title="List"
        buttonStyle={styles.listButton}
        titleStyle={styles.title}
      />
      <Button
        onPress={() => {
          console.log('Scan is tapped')
        }}
        title="Scan"
        buttonStyle={styles.scanButton}
        titleStyle={styles.title}
      />
    </View>
  )
}
