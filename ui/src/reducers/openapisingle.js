import {
    OPENAPI_SINGLE_REQUESTED,
    OPENAPI_SINGLE_REQUEST_SUCCESS,
    OPENAPI_SINGLE_REQUEST_FAILURE
    } from '../actions/apiActions';
    
    const initialState = {

      api: null,
      isLoading: false,
      error: null
    }
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case OPENAPI_SINGLE_REQUESTED:
          return {
            ...state,
            api: null,
            isLoading: true,
            error: null,
          }
    
        case OPENAPI_SINGLE_REQUEST_SUCCESS:
          return {
            ...state,

            api: action.payload,
            isLoading: false,
            error: null,
          }
    
        case OPENAPI_SINGLE_REQUEST_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload.error,
          }
    
        default:
          return state
      }
    }
    