/* eslint-env jest */

import React from 'react'
import Button from '../../src/components/button'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Button
      title='button sample'
      onPress={() => {}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with buttonStyle', () => {
  const tree = renderer.create(
    <Button
      title='button sample'
      onPress={() => {}}
      buttonStyle={{
        flex: 1
      }}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with titleStyle', () => {
  const tree = renderer.create(
    <Button
      title='button sample'
      onPress={() => {}}
      titleStyle={{
        color: 'black'
      }}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
