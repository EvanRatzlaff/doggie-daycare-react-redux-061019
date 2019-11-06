import { combineReducers } from 'redux';
import petsReducer from './petsReducer';

export default combineReducers({
    petsReducer: petsReducer
})