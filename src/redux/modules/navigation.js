// @flow

// action types
const PUSH = 'navigation/push'
const POP = 'navigation/pop'

// initial state
type Route = {
  key: string,
}
type State = {
  navigationState: {
    index: number,
    routes: Array<Route>,
  }
}

const initialState: State = {
  navigationState: {
    index: 0,
    routes: [
      {
        key: 'My Initial Scene',
      },
    ],
  },
}

export default function (state: State = initialState, action: Action) {
  switch (action.type) {
    case PUSH:
      return state
    case POP:
      return state
    default:
      return state
  }
}


// action creators
export const pushRoute = (newRoute: Route) => ({
  type: PUSH,
  payload: {
    newRoute,
  },
})

export const popRoute = () => ({
  type: POP,
})
