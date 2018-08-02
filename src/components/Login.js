import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './InnerSection';
import firebase from 'firebase';
import { authInputChange } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {
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
          <FormInput
          value=""
          placeholder="Email"
          onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text}) } />
        </InnerSection>
        <InnerSection>
          <FormInput
          value=""
          placeholder="Password"
          onChangeText={text => this.props.authInputChange({'field': 'password', 'value': text}) }
          secureTextEntry={true} />
        </InnerSection>
        <InnerSection>
          <Button title="Login" />
        </InnerSection>
      </View>
    );
  }
}

export default connect(null, { authInputChange })(Login);