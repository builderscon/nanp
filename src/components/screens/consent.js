// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Button from '../button'
import { COLOR } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLOR.SOFT_BLUE,
    height: 64,
    width: 256,
  },
  title: {
    color: COLOR.WHITE,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'avenir',
  },
})

type Props = {
  screenProps: {
    actions: Object,
    counter: Object,
  },
}
const Consent = (props: Props) => {
  const { counter, actions } = props.screenProps

  return (
    <View style={styles.container}>
      <Text>{counter.current}</Text>
      <Button
        onPress={() => {
          actions.countup()
        }}
        title="Countup"
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
    </View>
  )
}

Consent.navigationOptions = {
  title: 'Consent',
}

export default Consent
