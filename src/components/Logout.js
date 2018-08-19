import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import InnerSection from './InnerSection';
import { logout } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Logout extends Component {
  

  logout() {
    this.setState({ email: '', password: '' });
    this.props.logout();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <InnerSection>
          <Text style={{ fontSize: 30, textAlign: 'center' }}>Are you sure?</Text>
        </InnerSection>
        <InnerSection>
          <Button title="Logout" onPress={this.logout.bind(this)} backgroundColor={'#3bd3b4'} />
        </InnerSection>
        <InnerSection>
          <Button title="Cancel" onPress={() => this.props.navigation.navigate('App')} color={'#555'} backgroundColor={'transparent'} />
        </InnerSection>
      </View>
    )
  }
}

export default connect(null, { logout })(Logout);
