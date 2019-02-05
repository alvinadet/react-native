import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Head } from '../../components/head'
import { List } from '../../components/list'
import { LoginScreenProps } from './props'

const Buah = [
  {
    title: 'mangga',
    icon: 'flight-takeoff'
  },
  {
    title: 'apel',
    icon: 'flight-takeoff'
  },
  {
    title: 'apel',
    icon: 'flight-takeoff'
  },
  {
    title: 'apel',
    icon: 'flight-takeoff'
  }
]

export class LoginScreen extends React.Component<LoginScreenProps> {
  constructor(props: LoginScreenProps) {
    super(props)
  }

  public render() {
    const { navigation } = this.props as Required<LoginScreenProps>
    return (
      <View>
        <Head />
        <Button
          title="Button"
          buttonStyle={{ height: 30, width: 100 }}
          onPress={() => navigation.navigate('Main')}
        />
        {Buah.map((datum, index) => {
          return <List key={index} title={datum.title} icon={datum.icon} />
        })}
      </View>
    )
  }
}
