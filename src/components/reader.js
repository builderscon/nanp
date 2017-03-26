import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import Camera from 'react-native-camera'

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
})

type Props = {
  onBarCodeRead: (decoded: string) => void,
}
export default function (props: Props) {
  return (
    <Camera
      style={styles.preview}
      aspect={Camera.constants.Aspect.fill}
      onBarCodeRead={event => props.onQrCodeRead(event.data.toString())}
    />
  )
}
