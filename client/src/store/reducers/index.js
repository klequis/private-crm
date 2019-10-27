import { combineReducers } from 'redux'
import requests from './requests'
// import imageUpload from './upload-image'
import auth from './auth'
// import { events, eventsUi } from './events'
// import { postalCodes } from './location'
import { reducer as formReducer } from 'redux-form'
import snackbar from './snackbar'
import appMenu from './app-menu'
import pageMessage from './page-message'
import { people, peopleUi} from './people-reducers'
// import { searchText, search } from './search'

export default combineReducers({
  people,
  peopleUi,
  // imageUpload,
  // postalCodes,
  requests,
  snackbar,
  appMenu,
  // searchText,
  // search,
  pageMessage,
  form: formReducer,
  auth,
})
