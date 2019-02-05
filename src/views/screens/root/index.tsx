import React from 'react'
import { Text, View } from 'react-native'
import { LoginScreen } from '../login'
import { RootScreenNav } from './nav'
import { RootScreenProps } from './props'

export class RootScreen extends React.Component<RootScreenProps> {
  constructor(props: RootScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <RootScreenNav />
      </View>
    )
  }
}
