// @flow

import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import { COLOR } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.SOFT_BLUE,
  },
})

export default function Consent() {
  return (
    <View style={styles.container} />
  )
}
