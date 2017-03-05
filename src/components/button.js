// @flow

import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class Button extends React.Component {
  render() {
    const {
      onPress,
      title,
      buttonStyle,
      titleStyle,
    } = this.props


return (
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyle}
      >
        <View style={styles.textContainer}>
          <Text style={titleStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
