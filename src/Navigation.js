import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Logout from './components/Logout';
import { Icon, Button } from 'react-native-elements';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Doorman',
      headerBackTitle: null
    }
  },
  Create: {
    screen: CreateAccount,
    navigationOptions: {
      headerTitle: 'Doorman',
    }
  }
});

const ModalStack = createStackNavigator(
  {
    Modal: {
      screen: Logout
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

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
        headerLeft: (
          <Button
            onPress={() => navigation.navigate('Modal')}
            title="Logout"
            backgroundColor="transparent"
            color="#555"
          />
        )
      };
    }
  },
  AddNotes: {
    screen: AddNote,
    navigationOptions: {
      headerTitle: 'New Note'
    }
  },
  EditNote: {
    screen: EditNote,
    navigationOptions: {
      headerTitle: 'Edit Note'
    }
  }
});

export default createSwitchNavigator(
  {
    App: AppStack,
    Modal: ModalStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
);