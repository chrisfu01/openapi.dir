import {
OPENAPI_REQUESTED,
OPENAPI_REQUEST_SUCCESS,
OPENAPI_REQUEST_FAILURE
} from '../actions/apiActions';

const initialState = {
  total: 0,
  apis: [],
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPENAPI_REQUESTED:
      return {
        ...state,
        apis: [],
        isLoading: true,
        error: null,
      }

    case OPENAPI_REQUEST_SUCCESS:
      return {
        ...state,
        total: action.payload.total,
        apis: action.payload.apis,
        isLoading: false,
        error: null,
      }

    case OPENAPI_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }

    default:
      return state
  }
}
