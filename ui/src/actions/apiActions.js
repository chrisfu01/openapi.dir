import axios from 'axios';

const BASE = 'http://' + window.location.hostname + ':3000';

const apiUrl = BASE + '/public/specs';
const apiUrlSingle = BASE + '/public/specs/';

const pubUrl = BASE + '/public/pub';
const registerPostUrl = BASE + '/public/company_register';
const loginUrl = BASE + '/public/login';
const uploadUrl = BASE + '/public/uppity';

export const LOGOUT = 'LOGOUT'
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE'
export const OPENAPI_REQUESTED = 'OPENAPI_REQUESTED'
export const OPENAPI_REQUEST_SUCCESS = 'OPENAPI_REQUEST_SUCCESS'
export const OPENAPI_REQUEST_FAILURE = 'OPENAPI_REQUEST_FAILURE'

export const OPENAPI_SINGLE_REQUESTED = 'OPENAPI_SINGLE_REQUESTED'
export const OPENAPI_SINGLE_REQUEST_SUCCESS = 'OPENAPI_SINGLE_REQUEST_SUCCESS'
export const OPENAPI_SINGLE_REQUEST_FAILURE = 'OPENAPI_SINGLE_REQUEST_FAILURE'

export const REGISTER_REQUESTED = 'REGISTER_REQUESTED'
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS'
export const REGISTER_REQUEST_FAILURE = 'REGISTER_REQUEST_FAILURE'

export const PUB_REQUESTED = 'PUB_REQUESTED'
export const PUB_REQUEST_SUCCESS = 'PUB_REQUEST_SUCCESS'
export const PUB_REQUEST_FAILURE = 'PUB_REQUEST_FAILURE'

export const UPLOAD_REQUESTED = 'UPLOAD_REQUESTED'
export const UPLOAD_REQUEST_SUCCESS = 'UPLOAD_REQUEST_SUCCESS'
export const UPLOAD_REQUEST_FAILURE = 'UPLOAD_REQUEST_FAILURE'


export const loginRequested = () => {
    return {
        type: LOGIN_REQUESTED,
    }
};

export const loginSuccess = (payload) => {
    return {
      type: LOGIN_REQUEST_SUCCESS,
      payload
    }
};

export const loginFailure = (payload) => {
    return {
      type: LOGIN_REQUEST_FAILURE,
      payload
    }
};

export const openapiRequestSuccess = (payload) => {
    return {
      type: OPENAPI_REQUEST_SUCCESS,
      payload
    }
};

export const openapiRequested = (data) => {
    return {
        type: OPENAPI_REQUESTED,
    }
};

export const RegRequestSuccess = (payload) => {
    return {
      type: REGISTER_REQUEST_SUCCESS,
      payload
    }
};

export const RegRequested = (data) => {
    return {
        type: REGISTER_REQUESTED,
    }
};

export const PubsRequestSuccess = (payload) => {
    return {
      type: PUB_REQUEST_SUCCESS,
      payload
    }
};

export const PubsRequested = (data) => {
    return {
        type: PUB_REQUESTED,
    }
};


export const UploadRequestSuccess = (payload) => {
    return {
      type: UPLOAD_REQUEST_SUCCESS,
      payload
    }
};

export const UploadRequested = (data) => {
    return {
        type: UPLOAD_REQUESTED,
    }
};


export const loadOpenApis = (page) => {
    return (dispatch) => {
        dispatch(openapiRequested()); 

        return axios.get(apiUrl)
            .then(response => {
                dispatch(openapiRequestSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const loadOpenApiSingle = (id) => {
    return (dispatch) => {
        dispatch(openapiRequested()); 

        return axios.get(apiUrlSingle + id)
            .then(response => {
                dispatch(openapiRequestSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const loadPubs = (page) => {
    return (dispatch) => {
        dispatch(PubsRequested()); 

        return axios.get(pubUrl)
            .then(response => {
                dispatch(PubsRequestSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export function uploadAPI(apiInfo) {
    //alert(apiInfo.selectedFile[0]);
    //alert(apiInfo.loaded);
    return (dispatch) => {
        dispatch(UploadRequested()); 
        console.log(apiInfo);

        
        return axios.post(uploadUrl, apiInfo, {
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                      })
            .then(response => {
                dispatch(UploadRequestSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function register(companyInfo) {
    return (dispatch) => {
        dispatch(RegRequested()); 
        //console.log(companyInfo);

        return axios.post(registerPostUrl, companyInfo)
            .then(response => {
                dispatch(RegRequestSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}


export function authenticate(email, password) {
    return (dispatch) => {
        dispatch(loginRequested()); 
        return axios.post(loginUrl, {email, password})
            .then(response => {
                localStorage.setItem("auth-token", response.data.token); 
                localStorage.setItem("auth-user", response.data.user); 
                dispatch(loginSuccess({user: response.data.user} ));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(loginFailure({error: error.response.data}))
            });
    };
}

export function logout() {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-user");
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
        });
    };
}