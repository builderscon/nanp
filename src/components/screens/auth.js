// @flow

import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'

import { COLOR } from '../../constants'
import Button from '../button'
import { CustomTabs } from 'react-native-custom-tabs'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'black',
  },
  box: {
    height: 200,
    paddingTop: 60,
    paddingBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
  },
  input: {
    flex: 1,
    fontSize: 36,
    textAlign: 'center',
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BLACK,
    borderWidth: 1,
    borderRadius: 10,
  },
  loginButton: {
    flex: 1,
    backgroundColor: COLOR.SOFT_BLUE,
  },
  title: {
    color: COLOR.WHITE,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'avenir',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: COLOR.BLACK,
    opacity: 0.5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

type Props = {
  navigation: Object,
}

export default class Auth extends React.Component {
  props: Props
  state: State = {
    debug: false,
    loading: false,
    // six numbers
    code: [null, null, null, null, null, null],
    focusCode: 0,
  }

  // six inputs 
  codeInputs = [null, null, null, null, null, null]
  console = ["CONSOLE"]

  login() {
    this.setState({ loading: true })
    this.console.unshift(`login`)
    fetch('https://www.google.co.jp')
      .then(res => this.console.unshift(`done: ${res.status}`))
      .catch(err => this.console.unshift(`error: ${err}`))
      .then(() => this.setState({ loading: false }))
  }

  onChangeCode(i: number) {
    return (newValue: string) => {
      let code = this.state.code
      if (newValue.length === 1) {
        code[i] = parseInt(newValue)
        this.codeInputs[i].blur()
        if (i < this.codeInputs.length-1) {
          this.codeInputs[i+1].focus()
        } else {
          this.login()
        }
      } else {
        code[i] = null
      }
      this.setState({code})
    }
  }

  render() {
    // CustomTabs.openURL('https://www.google.com').then((launched: boolean) => {
    //   console.log(`Launched custom tabs: ${launched}`);
    // }).catch(err => {
    //   console.error(err)
    // });
    this.console.unshift(`render: ${this.state.loading}`)
    const { navigate, state } = this.props.navigation
    const activityIndicator = this.state.loading
      ? <View style={styles.loading}>
          <Text>Logging in</Text>
          <ActivityIndicator size='large' hidesWhenStopped={true} />
        </View>
      : null
    const debugConsole = this.state.debug
      ? <View style={{ flex: 0.3, backgroundColor: 'white' }}>
          <Text>{ this.console.join("\n") }</Text>
        </View>
      : null

    return (
      <View style={styles.container}>
        { debugConsole }
        <View style={{ flex: 1, backgroundColor: COLOR.WHITE }}>
          <Text>user: {state.params.user}</Text>
          <View style={styles.box}>
          {this.state.code.map((n, i) => {
            return (
              <View style={{ flex: 1, padding: 10 }} key={`code${i}`}>
                <TextInput
                  ref={(ti) => { this.codeInputs[i] = ti }}
                  style={styles.input}
                  onChangeText={this.onChangeCode(i)}
                  value={`${n !== null ? n : ''}`}
                  keyboardType={'numeric'}
                  selectTextOnFocus={true}
                  autoFocus={ i === this.state.focusCode }
                  maxLength={1}
                />
              </View>
            )
          })}
          </View>
        </View>
        <Button
          onPress={() => { navigate('Consent') }}
          title="Login"
          buttonStyle={styles.loginButton}
          titleStyle={styles.title}
        />
        { activityIndicator }
      </View>
    )
  }

  static navigationOptions = {
    title: 'Auth',
  }
}
