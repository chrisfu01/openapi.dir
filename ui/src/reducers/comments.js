import {
    COMMENTS_REQUESTED,
    COMMENTS_REQUEST_SUCCESS,
    COMMENTS_REQUEST_FAILURE,
    COMMENT_POST_REQUESTED,
    COMMENT_POST_SUCCESS,
    COMMENT_POST_FAILURE
    } from '../actions/apiActions';
    
    const initialState = {
      total: 0,
      comments: [],
      postrequested: false,
      postsuccess: false,
      isLoading: false,
      error: null
    }
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case  COMMENTS_REQUESTED:
          return {
            ...state,
            comments: [],
            isLoading: true,
            error: null,
          }
    
        case COMMENTS_REQUEST_SUCCESS:
          return {
            ...state,
            total: action.payload.total,
            comments: action.payload.comments,
            isLoading: false,
            error: null,
          }
    
        case COMMENTS_REQUEST_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload.error,
          }

          case COMMENT_POST_REQUESTED:
          return {
            ...state,
            postrequested: true,
            postsuccess: false,
            
          }
    
        case COMMENT_POST_SUCCESS:
          return {
            ...state,
            postrequested: false,
            postsuccess: true,
            isLoading: false,
            error: null,
          }
    
        case COMMENT_POST_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload.error,
            postrequested: false,
            postsuccess: false,
          }
    
        default:
          return state
      }
    }
    