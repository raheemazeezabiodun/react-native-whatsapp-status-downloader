import {
    FETCH_WHATSAPP_STATUS_IMAGES_START,
    FETCH_WHATSAPP_STATUS_IMAGES_SUCCESS,
    FETCH_WHATSAPP_STATUS_IMAGES_FAIL
} from '../constants';

import { createReducer } from '../utils/helpers';


const initialState = {
    request: false,
    files: [],
    error: null
};

export default createReducer(initialState, {
    [FETCH_WHATSAPP_STATUS_IMAGES_START]: (state, payload) => {
        return Object.assign({}, state, {
            request: true
        })
    },
    [FETCH_WHATSAPP_STATUS_IMAGES_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            request: false,
            files: payload.images
        })
    },
    [FETCH_WHATSAPP_STATUS_IMAGES_FAIL]: (state, payload) => {
        return Object.assign({}, state, {
            request: false,
            error: payload.error
        })
    }
})
