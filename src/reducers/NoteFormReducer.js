const initialState = {
  title: '',
  body: ''
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

    default: 
      return state;
  }
}