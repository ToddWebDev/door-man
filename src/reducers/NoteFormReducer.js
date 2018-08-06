const initialState = {
  title: '',
  body: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'NOTE_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };

    case 'NEW_NOTE':
      return initialState;

    default: 
      return state;
  }
}