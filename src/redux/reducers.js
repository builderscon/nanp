// @flow

import {
  combineReducers,
} from 'redux'

import navigation from './modules/navigation'

const reducers = combineReducers({
  navigation,
})

export default reducers
