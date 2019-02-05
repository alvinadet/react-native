import React from 'react'

import { Header } from 'react-native-elements'
import { HeadProps } from './props'

export function Head(props: HeadProps) {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}
