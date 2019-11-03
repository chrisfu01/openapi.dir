import jwt_decode from 'jwt-decode';

import {
  LOGOUT,
  LOGIN_REQUESTED,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE
} from '../actions/apiActions';

function loadUserProfile() {
  // check if the user has previously logged in. 
  try {
      const token = localStorage.getItem("auth-token");
      const user = localStorage.getItem("auth-user");

      if (token == null || user == null) return null; 

      const decoded = jwt_decode(token);
      const now = new Date().getTime() / 1000; // Date().getTime() returns
      // milliseconds.
      // So divide by 1000 to get
      // seconds
      if (now > decoded.exp) {
          return null;
      }
      else {
        return user;
      }
  } catch (err) {
      return null;
  }
}

const initialState = {
  user: null,
  isLoading: false,
  error: null
}



function initializeState() {
  const user = loadUserProfile();
  if (!user) {
      return initialState;
  }

  return Object.assign({}, initialState, {
      user: user,
  });
}

export default (state = initializeState(), action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        user: null,
        isLoading: true,
        error: null,
      }

    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        error: null,
      }

    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload.error,
      }

    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: null,
      }
      
    default:
      return state
  }
}
