import {
    CAT_REQUESTED,
    CAT_REQUEST_SUCCESS,
    CAT_REQUEST_FAILURE
    } from '../actions/apiActions';
    
    const initialState = {
      categories: [],
      isLoading: false,
      error: null
    }
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case  CAT_REQUESTED:
          return {
            ...state,
            categories: [],
            isLoading: true,
            error: null,
          }
    
        case CAT_REQUEST_SUCCESS:
          return {
            ...state,
            categories: action.payload,
            isLoading: false,
            error: null,
          }
    
        case CAT_REQUEST_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload.error,
          }
    
        default:
          return state
      }
    }
    