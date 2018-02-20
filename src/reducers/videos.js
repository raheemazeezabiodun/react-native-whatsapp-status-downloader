import {
    FETCH_WHATSAPP_STATUS_VIDEOS_START,
    FETCH_WHATSAPP_STATUS_VIDEOS_SUCCESS,  
} from '../constants';

import { createReducer } from '../utils/helpers';


const initialState = {
    request: false,
    files: [],
    error: null
};

export default createReducer(initialState, {
    [FETCH_WHATSAPP_STATUS_VIDEOS_START]: (state, payload) => {
        return Object.assign({}, state, {
            request: true
        })
    },
    [FETCH_WHATSAPP_STATUS_VIDEOS_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            request: false,
            files: payload.videos
        })
    }
})
