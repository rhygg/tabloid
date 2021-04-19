import { combineReducers } from 'redux';

import newsReducer from "../reducer"
const rootReducer = combineReducers({ newsReducer });

export default rootReducer;