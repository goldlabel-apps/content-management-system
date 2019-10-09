import { combineReducers } from 'redux';
import auth from './auth';

const initialState = {
  updated: Date.now(),
  loading: false,
  confirm: false,
}

const top = (state = initialState, action) => {
  
  // console.log('top reducer', action.type);
  
  switch (action.type) {   
    case 'STARTOVER':
      return initialState

    case 'TOP/TOGGLE/LOADING':
      // console.log('top reducer', state, );
      return {
        ...state,
        updated: Date.now(),
        loading: action.bool,
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  top,
  auth
})

export default rootReducer;
