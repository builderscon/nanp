/* eslint-env jest */

import React from 'react'
import Index from '../index.android.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

xit('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})