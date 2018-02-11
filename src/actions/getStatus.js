import RNFetchBlob from 'react-native-fetch-blob';
import {
    FETCH_WHATSAPP_STATUS_FILES_START,
    FETCH_WHATSAPP_STATUS_FILES_SUCCESS,
    FETCH_WHATSAPP_STATUS_FILES_FAIL
} from '../constants';

import { getWhatsappStatusDirectory } from '../utils/helpers';

export function fetchWhatsappStatusFilesStart() {
    return {
        type: FETCH_WHATSAPP_STATUS_FILES_START
    }
}

export function fetchWhatsappStatusFilesSuccess(statusFiles) {
    return {
        type: FETCH_WHATSAPP_STATUS_FILES_SUCCESS,
        payload: {
            statusFiles: statusFiles
        }
    }
}

export function fetchWhatsappStatusFilesFail(error) {
    return {
        type: FETCH_WHATSAPP_STATUS_FILES_FAIL,
        error
    }
}

export function fecthWhatsappStatus(){
    return (dispatch => {
        dispatch(fetchWhatsappStatusFilesStart());
        RNFetchBlob.fs.ls(getWhatsappStatusDirectory())
            .then(data => {
                dispatch(fetchWhatsappStatusFilesSuccess(data))
            }).catch(error => {
            dispatch(fetchWhatsappStatusFilesFail(error));
        });

    })
}
