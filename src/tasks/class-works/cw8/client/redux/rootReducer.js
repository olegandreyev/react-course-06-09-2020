import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'

import gistsReducer from './slices/gistsSlice';
import filesReducer from './slices/filesSlice'

export default combineReducers({
  gists: gistsReducer,
  files: filesReducer,
  form: formReducer
})
