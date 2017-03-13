// @flow

import React from 'react'
import {
  bindActionCreators,
} from 'redux'
import {
  connect,
  Provider,
} from 'react-redux'

import Navigator from '../../components/app'
import store from '../store'

import * as counterActionCreators from '../modules/counter'

const mapStateToProps = ({ counter }: any) => ({
  counter,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators({
    ...counterActionCreators,
  }, dispatch),
  dispatch,
})

const App = props => <Navigator screenProps={props} />

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default function Container() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}
