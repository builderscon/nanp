// @flow

import {
  combineReducers,
} from 'redux'

import counterReducers from './modules/counter'

const reducers = combineReducers({
  counter: counterReducers,
})

export default reducers
