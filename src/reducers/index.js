import { combineReducers } from 'redux';
import navReducer from './nav';
import statusReducer from './getStatus';
import imagesReducer from './images';

export default combineReducers({
    nav: navReducer,
    whatsappStatus: statusReducer,
    images: imagesReducer
})
