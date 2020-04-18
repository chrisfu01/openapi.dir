import { combineReducers } from 'redux'
import openapis from './openapis'
import openapisingle from './openapisingle'
import comments from './comments'

import publishers from './publishers'
import categories from './categories'
import urlify from './urlify'


import upload from './upload'
import auth from './auth'

export default combineReducers({
  openapis: openapis,
  openapisingle: openapisingle,
  comments: comments,
  categories: categories,
  publishers: publishers,
  upload: upload,
  urlify: urlify,
  auth: auth,
})
