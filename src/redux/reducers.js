// @flow

import {
  combineReducers,
} from 'redux'

import navigationReducers from './modules/navigation'

const reducers = combineReducers({
  navigationState: navigationReducers,
})

export default reducers
