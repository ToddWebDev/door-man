import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.title} </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#fafbfc',
    paddingTop: 24,
    alignItems: 'center',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1
  },
  
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 14
  }
}