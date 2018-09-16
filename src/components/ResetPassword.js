import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './InnerSection';
import { authInputChange, resetPassword } from '../actions';
import { connect } from 'react-redux';

class ResetPassword extends React.Component {

  reset() {
    console.log('Entering reset password function');
    const { email } = this.props;
    console.log(this.props);
    console.log(email);
    this.props.resetPassword({email});
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
      <Button title="Send Link" onPress={this.reset.bind(this)} backgroundColor={'#3bd3b4'} />
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
    email: state.auth.email || '',
    loading: state.auth.loading,
    error: state.auth.error
  }
};

export default connect(mapStateToProps, { authInputChange, resetPassword })(ResetPassword);