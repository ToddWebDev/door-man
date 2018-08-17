import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './components/Login';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { Icon } from 'react-native-elements';

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
    navigationOptions: ({navigation}) => {
      return {
        title: 'Notes',
        headerRight: (
          <Icon 
            type='evilicon'
            name="plus"
            size={30}
            onPress={() => navigation.navigate('AddNotes')}
            iconStyle={{paddingRight: 10}}
          />
        ),
        headerLeft: null
      };
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