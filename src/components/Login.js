import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './InnerSection';
import firebase from 'firebase';
import { authInputChange, login } from '../actions';
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

  login() {
    console.log('Entering login function');
    const { email, password } = this.props;
    this.props.login({email, password});
  }
  
  render() {
    return (
      <View>
        <InnerSection>
          <FormInput
          value={this.props.email}
          placeholder="Email"
          onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text}) } />
        </InnerSection>
        <InnerSection>
          <FormInput
          value={this.props.password}
          placeholder="Password"
          onChangeText={text => this.props.authInputChange({'field': 'password', 'value': text}) }
          secureTextEntry={true} />
        </InnerSection>
        <InnerSection>
          <Button title="Login" onPress={this.login.bind(this)} />
        </InnerSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
};

export default connect(mapStateToProps, { authInputChange, login })(Login);