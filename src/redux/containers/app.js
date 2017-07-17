// @flow

import React from 'react'
import {
  bindActionCreators,
} from 'redux'
import {
  connect,
  Provider,
} from 'react-redux'
import {
  Platform,
} from 'react-native'

import Navigator from '../../components/app'
import store from '../store'

import * as qrCodeReaderActionCreators from '../modules/qr-code-reader'

const mapStateToProps = ({ qrCodeReader }: any) => ({
  qrCodeReader,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators({
    ...qrCodeReaderActionCreators,
  }, dispatch),
  dispatch,
})

const App = props => <Navigator screenProps={props} />

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

const prefix = Platform.OS == 'android' ? 'mychat://mychat/' : 'mychat://'
export default function Container() {
  return (
    <Provider store={store} uriPrefix={prefix}>
      <ConnectedApp />
    </Provider>
  )
}
