import {
    FETCH_WHATSAPP_STATUS_IMAGES_START,
    FETCH_WHATSAPP_STATUS_IMAGES_SUCCESS,
    FETCH_WHATSAPP_STATUS_IMAGES_FAIL
} from '../constants';
import { getWhatsappStatusDirectory } from '../utils/helpers';


export function fetchWhatsappStatusImagesStart() {
    return {
        type: FETCH_WHATSAPP_STATUS_IMAGES_START
    }
}

export function fetchWhatsappStatusImagesSuccess(images) {
    return {
        type: FETCH_WHATSAPP_STATUS_IMAGES_SUCCESS,
        payload: {
            images
        }
    }
}

export function fetchWhatsappStatusImagesFail(error) {
    return {
        type: FETCH_WHATSAPP_STATUS_IMAGES_FAIL,
        error
    }
}

export function getWhatsappImages(statusFiles) {
    return (dispatch) => {
        dispatch(fetchWhatsappStatusImagesStart());
        let images = statusFiles.filter((elem, index) => elem.endsWith('.jpg'));
        return dispatch(fetchWhatsappStatusImagesSuccess(images));

    }
}