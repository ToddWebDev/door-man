import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import NoteFormReducer from './NoteFormReducer';

export default combineReducers({
  auth: AuthenticationReducer,
  note: NoteFormReducer
})