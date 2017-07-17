// @flow

import React from 'react'
import {
  StackNavigator,
} from 'react-navigation'

import Home from './screens/home'
import Auth from './screens/auth'
import Consent from './screens/consent'
import Scan from './screens/scan'
import Name from './screens/name'

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Auth: {
    screen: Auth,
    path: 'auth/:user',
  },
  Consent: {
    screen: Consent,
  },
  Scan: {
    screen: Scan,
  },
  Name: {
    screen: Name,
  },
})
