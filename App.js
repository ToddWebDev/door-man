import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Login" />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
