// @flow

import invariant from 'invariant'

// action types
const SET_READ_DATA = 'qr-code-reader/set-read-data'

// initial state
type State = {
  readData: string,
}

const initialState: State = {
  readData: '',
}

// reducer
export default function (state: State = initialState, action: Action) {
  switch (action.type) {
    case SET_READ_DATA: {
      invariant(action.payload, 'payload is required')

      return {
        ...state,
        readData: action.payload.readData,
      }
    }

    default: {
      return state
    }
  }
}

// action creators
export const setReadData = (readData: string) => ({
  type: SET_READ_DATA,
  payload: {
    readData,
  },
})
