// @flow

import React from 'react'
import {
  // bindActionCreators,
  combineReducers,
  createStore,
} from 'redux'
import {
  connect,
  Provider,
} from 'react-redux'
import {
  addNavigationHelpers,
} from 'react-navigation'

import Navigator from '../../components/app'

// reducers
const navigationReducer = (state, action) => {
  const newState = Navigator.router.getStateForAction(action, state)

  return newState || state
}

const reducers = combineReducers({
  navigation: navigationReducer,
})

// store
const store = createStore(reducers)

// connect
const mapStateToProps = ({ navigation }: any) => ({
  navigation,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatch,
})

const App = props =>
  <Navigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.navigation,
    })}
    screenProps={props}
  />

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default function Container() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}
