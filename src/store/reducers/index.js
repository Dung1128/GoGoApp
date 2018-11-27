import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import notification from './notification';
import auth from './auth';
import setting from './setting';

import search from './search';
import {
  router,
  requests,
  toast,
  modal,
  drawer,
  gallery,
  browser
} from './common';

const appReducer = combineReducers({
  form,
  router,
  notification,
  ui: combineReducers({
    toast,
    modal,
    drawer,
    gallery,
    browser
  }),
  requests,
  auth,
  setting,
  search
});

const rootReducer = (state, action) => {
  if (action.type === 'app/logout') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
