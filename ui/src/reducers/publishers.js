import {
    PUB_REQUESTED,
    PUB_REQUEST_SUCCESS,
    PUB_REQUEST_FAILURE
    } from '../actions/apiActions';
    
    const initialState = {
      total: 0,
      publishers: [],
      isLoading: false,
      error: null
    }
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case  PUB_REQUESTED:
          return {
            ...state,
            publishers: [],
            isLoading: true,
            error: null,
          }
    
        case PUB_REQUEST_SUCCESS:
          return {
            ...state,
            total: action.payload.total,
            publishers: action.payload.publishers,
            isLoading: false,
            error: null,
          }
    
        case PUB_REQUEST_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload.error,
          }
    
        default:
          return state
      }
    }
    