import React, { Component } from 'react'
import { List, ListItem } from 'react-native-elements';
import { Text, View } from 'react-native'

export default class NoteList extends Component {
  render() {
    return (
      <List>
        <ListItem
          title={'Dummy Title'}
        />
        <ListItem
          title={'Idiot Title'}
        />
        <ListItem
          title={'Sample Title'}
        />
        <ListItem
          title={'Loser Title'}
        />
      </List>
    )
  }
}