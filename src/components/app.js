// @flow

import React from 'react'
import {
  StyleSheet,
  NavigationExperimental,
} from 'react-native'

import Home from './screens/home'
import Applicants from './screens/applicants'
import Consent from './screens/consent'

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
})

type Props = {
  navigationState: Object,
  actions: {
    popRoute: Function,
  },
}

export default class App extends React.Component {
  props: Props

  renderScene({ scene }: Object) {
    switch (scene.route.component) {
      case 'home':
        return <Home {...this.props} />
      case 'list':
        return <Applicants {...this.props} />
      case 'consent':
        return <Consent {...this.props} />
      default:
        throw new Error('unknown scene')
    }
  }

  render() {
    const {
      actions,
      navigationState,
    } = this.props


return (
      <NavigationExperimental.CardStack
        onNavigateBack={actions.popRoute}
        navigationState={navigationState}
        renderScene={navigation => this.renderScene(navigation)}
        style={styles.navigator}
      />
    )
  }
}
