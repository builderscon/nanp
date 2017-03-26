// @flow

import React from 'react'
import {
  StackNavigator,
} from 'react-navigation'

import Home from './screens/home'
import Applicants from './screens/applicants'
import Consent from './screens/consent'
import Scan from './screens/scan'

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Applicants: {
    screen: Applicants,
  },
  Consent: {
    screen: Consent,
  },
  Scan: {
    screen: Scan,
  },
})
