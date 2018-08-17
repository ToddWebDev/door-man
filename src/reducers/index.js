import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import NoteFormReducer from './NoteFormReducer';
import NotesReducer from './NotesReducer';

export default combineReducers({
  auth: AuthenticationReducer,
  note: NoteFormReducer,
  notes: NotesReducer
})