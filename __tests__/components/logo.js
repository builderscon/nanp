/* eslint-env jest */

import React from 'react'
import Logo from '../../src/components/logo'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Logo />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
