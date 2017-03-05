import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  Alert,
} from 'react-native'
import Camera from 'react-native-camera'

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
})

export default class Reader extends React.Component {
  constructor() {
    super()

    this.state = {
      readData: '',
    }
  }

  onQrCodeRead(event) {
    this.setState({
      readData: event.data.toString(),
    })
    Alert.alert('read')
  }

  render() {
    return (
      <Camera
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={event => { this.onQrCodeRead(event) }}
      >
        <Text>{this.state.readData}</Text>
      </Camera>
    )
  }
}
