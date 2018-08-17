import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './InnerSection';
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {
 
  login() {
    console.log('Entering login function');
    const { email, password } = this.props;
    this.props.login({email, password});
  }

  showButton() {
    if(this.props.loading) {
      return (
        <View>
          <ActivityIndicator size={'small'} />
        </View>
      );
    }
    return (
      <Button title="Login" onPress={this.login.bind(this)} backgroundColor={'#3bd3b4'} />
    )
  }

  showError() {
    if(this.props.error) {
      console.log(this.props.error);
      return (
        <FormValidationMessage>{this.props.error}</FormValidationMessage>
      )
    }
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
        {this.showError()}
        <InnerSection>
          {this.showButton()}
        </InnerSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.error
  }
};

export default connect(mapStateToProps, { authInputChange, login })(Login);