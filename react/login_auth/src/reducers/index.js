
import auth from './auth';
import counter from "./counter";
import { combineReducers } from 'redux';

export default combineReducers({
    auth:auth,
    counter:counter
})