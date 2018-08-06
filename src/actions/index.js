import firebase from 'firebase';

export const authInputChange = ({ field, value }) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: { field, value }
  }
}

export const login = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    if (email.length && password.length >= 4 ) {
      dispatch({type: 'LOADING'});
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          dispatch({type: 'LOGIN_SUCCESS', payload: user});
        })
        .catch(function(error){
          dispatch({type: 'LOGIN_FAILURE'});
      });
    } else {
      dispatch({type: 'INVALID_LOGIN_FORM'});
    }
  }
}

export const noteInputChange = ({ field, value }) => {
  return {
    type: 'NOTE_INPUT_CHANGE',
    payload: { field, value }
  }
}

export const createNote = ({ title, body }) => {
  const { uid } = firebase.auth().currentUser;
  console.log('Inside the Line: ' + title, body);
  return (dispatch) => {
    firebase.database().ref(`/userNotes/${uid}/notes`)
    .push({ title, body })
    .then(() => dispatch({type: 'NEW_NOTE'}));
  }
}