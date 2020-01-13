import { combineReducers } from 'redux'
import openapis from './openapis'
import openapisingle from './openapisingle'

import publishers from './publishers'
import categories from './categories'
import urlify from './urlify'


import upload from './upload'
import auth from './auth'

export default combineReducers({
  openapis: openapis,
  openapisingle: openapisingle,
  categories: categories,
  publishers: publishers,
  upload: upload,
  urlify: urlify,
  auth: auth,
})
