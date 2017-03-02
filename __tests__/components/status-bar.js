/* eslint-env jest */

import React from 'react'
import StatusBar from '../../src/components/status-bar'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <StatusBar />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
