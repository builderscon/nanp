// @flow

import React from 'react'
import {
  StackNavigator,
} from 'react-navigation'

import Home from './screens/home'
import Applicants from './screens/applicants'
import Consent from './screens/consent'

// $IgnoreFlow
Home.navigationOptions = {
  title: 'Home',
}
// $IgnoreFlow
Applicants.navigationOptions = {
  title: 'Applicants',
}
// $IgnoreFlow
Consent.navigationOptions = {
  title: 'Consent',
}

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
})
