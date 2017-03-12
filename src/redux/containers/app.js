// @flow

import React from 'react'
import { bindActionCreators } from 'redux'
import {
  connect,
  Provider,
} from 'react-redux'
import App from '../../components/app'
import store from '../store'

import * as navigationActionCreators from '../modules/navigation'

const mapStateToProps = ({ navigationState }: any) => ({
  navigationState,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators({
    ...navigationActionCreators,
  }, dispatch),
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default function Container() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}
