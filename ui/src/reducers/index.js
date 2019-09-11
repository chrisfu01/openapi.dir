import { combineReducers } from 'redux'
import openapis from './openapis'
import openapisingle from './openapisingle'

import publishers from './publishers'
import upload from './upload'
import auth from './auth'

export default combineReducers({
  openapis: openapis,
  openapisingle: openapisingle,
  publishers: publishers,
  upload: upload,
  auth: auth,
})
