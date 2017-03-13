// @flow

// action types
const COUNTUP = 'counter/countup'

// initial state
type State = {
  current: number,
}

const initialState: State = {
  current: 0,
}

// reducer
const DELTA = 1

export default function (state: State = initialState, action: Action) {
  switch (action.type) {
    case COUNTUP: {
      return {
        ...state,
        current: state.current + DELTA,
      }
    }

    default: {
      return state
    }
  }
}

// action creators
export const countup = () => ({
  type: COUNTUP,
})
