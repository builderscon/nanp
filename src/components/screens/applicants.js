// @flow

import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import {
  Cell, 
  Section,
  TableView,
} from 'react-native-tableview-simple'

import NavigationBar from 'react-native-navbar'

const styles = {
  container: {
    flex: 1,
  },
}
 
const backButtonConfig = {
  title: 'Back',
  handler: () => props.popRoute(),
}
 
const titleConfig = {
  title: 'Hello, world',
}
 
const CellVariant = (props) => (
  <Cell
    {...props}
    cellContentView={
      <View
        style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
      >
        <Text
          allowFontScaling
          numberOfLines={1}
          style={{ flex: 1, fontSize: 20 }}
        >
          {props.title}
        </Text>
      </View>
    }
  />
);

export default function Applicants(props: Props) {
  return <TableView>
      <NavigationBar
        title={titleConfig}
        leftButton={{
          title: 'Back',
          handler: () => props.actions.popRoute()
        }}
      />
      <Section>
        <CellVariant title="User 1" />
        <CellVariant title="User 2" />
        <CellVariant title="User 3" />
        <CellVariant title="User 4" />
      </Section>
    </TableView>
}
