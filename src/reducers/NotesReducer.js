const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_NOTES':
      return action.payload;

    default: 
      return state;
  }
}