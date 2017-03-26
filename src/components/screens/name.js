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

type Props = {
  screenProps: {
    qrCodeReader: {
      readData: string,
    },
  },
}
const Name = (props: Props) => {
  const { readData } = props.screenProps.qrCodeReader

  return (
    <View style={styles.container}>
      <Text>{readData}</Text>
    </View>
  )
}

Name.navigationOptions = {
  title: 'Name',
  header: {
    left: <View />,
  },
}

export default Name
