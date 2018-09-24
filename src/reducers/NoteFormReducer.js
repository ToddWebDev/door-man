const initialState = {
  title: '',
  body: '',
  error: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'NOTE_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };

    case 'CREATE_NOTE':
      return initialState;

    case 'NOTE_UPDATED':
      return initialState;

    case 'NOTE_DELETED':
      return initialState;

    case 'INVALID_NOTE_FORM':
      return { ...state, error: 'Title Required!' }

    default: 
      return state;
  }
}