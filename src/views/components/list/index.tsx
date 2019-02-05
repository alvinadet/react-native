import React from 'react'
import { ListItem } from 'react-native-elements'
import { ListProps } from './props'

export function List(props: ListProps) {
  return <ListItem title={props.title} leftIcon={{ name: props.icon }} />
}
