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
  },
  descriptionArea: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginHorizontal: 32,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'avenir',
  },
  button: {
    flex: 1,
    backgroundColor: COLOR.SOFT_BLUE,
  },
  buttonTitle: {
    color: COLOR.WHITE,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'avenir',
  },
})

type Props = {
  navigation: Object,
}
const Consent = (props: Props) => {
  const { navigate } = props.navigation

  return (
    <View style={styles.container}>
      <View style={styles.descriptionArea}>
        <Text style={styles.description}>Your information will be sent to the organization/company after this event. OK ?</Text>
      </View>
      <Button
        onPress={() => {
          navigate('Scan')
        }}
        title="Consent"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    </View>
  )
}

Consent.navigationOptions = {
  title: 'Consent',
}

export default Consent
