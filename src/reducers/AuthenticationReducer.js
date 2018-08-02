const initialState = {
  email: '',
  password: '',
  user: {},
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };

    case 'LOGIN_SUCCESS': 
      console.log('success');
      console.log(action.payload);
      return { ...state, user: action.payload, loading: false }

    case 'LOADING':
      return{...state, loading: true};
    
    case 'LOGIN_FAILURE':
      console.log('failure!');
      return { ...state, error: 'Authentication failed!', loading: false };

    default: 
      return state;
  }
}