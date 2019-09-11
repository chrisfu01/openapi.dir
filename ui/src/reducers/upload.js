import {
UPLOAD_REQUESTED, 
UPLOAD_REQUEST_SUCCESS,
UPLOAD_REQUEST_FAILURE 
    } from '../actions/apiActions';
    
    const initialState = {
      isUploading: false,
      isComplete: false,
      error: null
    }
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case  UPLOAD_REQUESTED:
          return {
            ...state,
            isComplete: false,
            isUploading: true,
            error: null,
          }
    
        case UPLOAD_REQUEST_SUCCESS:
          return {
            ...state,
            
            isComplete: true,
            isUploading: false,
            error: null,
          }
    
        case UPLOAD_REQUEST_FAILURE:
          return {
            ...state,
            isComplete: false,
            isUplading: false,
            error: action.payload.error,
          }
    
        default:
          return state
      }
    }
    