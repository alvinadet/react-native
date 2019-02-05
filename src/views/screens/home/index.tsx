import React from 'react'
import { Text, View } from 'react-native'
import { HomeScreenProps } from './props'

export class HomeScreen extends React.Component<HomeScreenProps> {
  constructor(props: HomeScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}
