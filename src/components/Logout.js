import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import InnerSection from './InnerSection';

export default class Logout extends Component {
  logout() {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View>
        <InnerSection>
          <Text style={{ fontSize: 30, textAlign: 'center' }}>Are you sure?</Text>
        </InnerSection>
        <InnerSection>
          <Button title="Logout" onPress={this.logout.bind(this)} backgroundColor={'#3bd3b4'} />
        </InnerSection>
        <InnerSection>
          <Button title="Cancel" onPress={() => this.props.navigation.goBack()} color={'#555'} backgroundColor={'transparent'} />
        </InnerSection>
      </View>
    )
  }
}