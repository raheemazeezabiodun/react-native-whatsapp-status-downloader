import {
    FETCH_WHATSAPP_STATUS_VIDEOS_START,
    FETCH_WHATSAPP_STATUS_VIDEOS_SUCCESS,
    FETCH_WHATSAPP_STATUS_VIDEOS_FAIL
} from '../constants';


export function fetchWhatsappStatusVideosStart() {
    return {
        type: FETCH_WHATSAPP_STATUS_VIDEOS_START
    }
}

export function fetchWhatsappStatusVideosSuccess(videos) {
    return {
        type: FETCH_WHATSAPP_STATUS_VIDEOS_SUCCESS,
        videos
    }
}

export function fetchWhatsappStatusVideosFail(error) {
    return {
        type: FETCH_WHATSAPP_STATUS_VIDEOS_FAIL,
        error
    }
}
