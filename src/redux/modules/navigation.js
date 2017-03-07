// @flow

import { NavigationExperimental } from 'react-native'
import invariant from 'invariant'

const { StateUtils } = NavigationExperimental

// action types
const PUSH = 'navigation/push'
const POP = 'navigation/pop'

// initial state
type Route = {
  key: string,
  component: string,
}
type State = {
  index: number,
  routes: Array<Route>,
}

const INITIAL_INDEX = 0
const MINIMUM_ROUTES = 1

const initialState: State = {
  index: INITIAL_INDEX,
  routes: [
    {
      key: Date.now().toString(),
      component: 'home',
    },
  ],
}

const isSameRoute = (state: State, newRoute: string): bool =>
  state.routes[state.index].component === newRoute

export default function (state: State = initialState, action: Action) {
  switch (action.type) {
    case PUSH: {
      invariant(action.payload != null, 'pushRoute require new route name')
      const { newRoute } = action.payload

      if (isSameRoute(state, newRoute)) {
        return state
      }

      return StateUtils.push(state, {
        key: Date.now().toString(),
        component: newRoute,
      })
    }

    case POP: {
      if (state.index === INITIAL_INDEX || state.routes.length === MINIMUM_ROUTES) {
        return state
      }

      return StateUtils.pop(state)
    }

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
