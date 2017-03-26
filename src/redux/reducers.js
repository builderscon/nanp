// @flow

import {
  combineReducers,
} from 'redux'

import qrCodeReaderReducers from './modules/qr-code-reader'

const reducers = combineReducers({
  qrCodeReader: qrCodeReaderReducers,
})

export default reducers
