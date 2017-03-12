// @flow

import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import { COLOR } from '../../constants'
// Import Reader from '../reader'
import Button from '../button'
import StatusBar from '../status-bar'
import Logo from '../logo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
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

type Props = {
  actions: Object,
}
export default function Home(props: Props) {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.logo}>
        <Logo />
      </View>
      <Button
        onPress={() => {
          props.actions.pushRoute('list')
        }}
        title="List"
        buttonStyle={styles.listButton}
        titleStyle={styles.title}
      />
      <Button
        onPress={() => {
          props.actions.pushRoute('consent')
        }}
        title="Scan"
        buttonStyle={styles.scanButton}
        titleStyle={styles.title}
      />
    </View>
  )
}