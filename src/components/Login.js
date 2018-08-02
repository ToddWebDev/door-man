import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './InnerSection';

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <InnerSection>
          <FormInput value="" placeholder="Email" />
        </InnerSection>
        <InnerSection>
          <FormInput value="" placeholder="Password" secureTextEntry={true} />
        </InnerSection>
        <InnerSection>
          <Button title="Login" />
        </InnerSection>
      </View>
    );
  }
}