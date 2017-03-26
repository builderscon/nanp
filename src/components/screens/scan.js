// @flow

import React from 'react'
import Reader from '../reader'

type Props = {
  navigation: {
    navigate: Function,
  },
  screenProps: {
    actions: {
      setReadData: Function,
    },
  },
}

type State = {
  isScannedOnce: boolean,
}
export default class Scan extends React.Component {
  props: Props
  state: State = {
    isScannedOnce: false,
  }

  onQrCodeRead(readData: string) {
    if (this.state.isScannedOnce) {
      return
    }

    this.setState({
      isScannedOnce: true,
    })

    const { navigate } = this.props.navigation
    const { actions } = this.props.screenProps

    actions.setReadData(readData)

    navigate('Name')
  }

  render() {
    return (
      <Reader
        onQrCodeRead={this.onQrCodeRead.bind(this)}
      />
    )
  }

  static navigationOptions = {
    title: 'Scan',
  }
}
