/* eslint-env jest */

import React from 'react'
import Todo from '../../../src/components/debug/todo'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Todo />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
