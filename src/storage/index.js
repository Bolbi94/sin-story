import { createStore, combineReducers } from 'redux';

import { reducer as lingeriesReducer, lingeriesActions } from './lingerie';

const rootReducer = combineReducers({
  lingerie: lingeriesReducer,
})

export const rootActions = {
  lingeriesActions,
};

export default createStore(rootReducer);
