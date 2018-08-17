import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './components/Login';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Doorman'
    }
  }
});

const AppStack = createStackNavigator({
  Notes: {
    screen: NoteList,
    navigationOptions: {
      headerTitle: 'Notes'
    }
  },
  AddNotes: {
    screen: NoteForm,
    navigationOptions: {
      headerTitle: 'New Note'
    }
  }
});

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
);