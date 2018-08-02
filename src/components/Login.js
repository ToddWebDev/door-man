import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './InnerSection';
import firebase from 'firebase';

export default class Login extends React.Component {
  componentDidMount(){
    const config = {
      apiKey: "AIzaSyDtBC8PhXkiWlrhZKGlXENmREhEjVmdX4I",
      authDomain: "doorman-auth.firebaseapp.com",
      databaseURL: "https://doorman-auth.firebaseio.com",
      projectId: "doorman-auth",
      storageBucket: "doorman-auth.appspot.com",
      messagingSenderId: "484408441043"
    };
    firebase.initializeApp(config);
  }
  
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