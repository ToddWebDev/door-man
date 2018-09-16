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
      console.log('login success');
      console.log(action.payload);
      return { ...state, error: '', user: action.payload, loading: false }

    case 'LOGOUT_SUCCESS': 
      console.log('logout success');
      console.log(action.payload);
      return { initialState, error: '', user: null, loading: false }

    case 'CREATE_ACCOUNT_SUCCESS': 
      console.log('create account success');
      console.log(action.payload);
      return { ...state, error: '', user: action.payload, loading: false }

    case 'LOADING':
      return { ...state, loading: true}

    case 'INVALID_LOGIN_FORM':
      return { ...state, error: 'Email and Password Required!', loading: false }
    
    case 'LOGIN_FAILURE':
      console.log('login failure!');
      return { ...state, error: 'Authentication failed!', loading: false }

    case 'LOGOUT_FAILURE':
      console.log('logout failure!');
      return { ...state, error: 'Logout failed!', loading: false }

    default: 
      return state;
  }
}