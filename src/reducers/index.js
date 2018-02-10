import { combineReducers } from 'redux';
import navReducer from './nav';

export default combineReducers({
    nav: navReducer
})
