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