import {
    FETCH_WHATSAPP_STATUS_FILES_START,
    FETCH_WHATSAPP_STATUS_FILES_SUCCESS,
    FETCH_WHATSAPP_STATUS_FILES_FAIL
} from '../constants';

import { createReducer } from '../utils/helpers';


const initialState = {
    request: false,
    files: [],
    error: null
};

export default createReducer(initialState, {
    [FETCH_WHATSAPP_STATUS_FILES_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            request: true
        })
    },
    [FETCH_WHATSAPP_STATUS_FILES_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            request: false,
            files: payload.statusFiles
        })
    },
    [FETCH_WHATSAPP_STATUS_FILES_FAIL]: (state, payload) => {
        return Object.assign({}, state, {
            request: false,
            error: payload.error
        })
    }
})
