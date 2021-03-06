import { Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'


const dirs = RNFetchBlob.fs.dirs;
export const SDCARD_DIR = Platform.OS === 'android' ? dirs.SDCardDir: '';

export const DIRECTORY_NAME = 'whatsappStatusDownloader';

export const DEV_MODE = true;

export const FETCH_WHATSAPP_STATUS_FILES_START = 'FETCH_WHATSAPP_STATUS_FILES_START';
export const FETCH_WHATSAPP_STATUS_FILES_SUCCESS = 'FETCH_WHATSAPP_STATUS_FILES_SUCCESS';
export const FETCH_WHATSAPP_STATUS_FILES_FAIL = 'FETCH_WHATSAPP_STATUS_FILES_FAIL';

export const FETCH_WHATSAPP_STATUS_IMAGES_START = 'FETCH_WHATSAPP_STATUS_IMAGES_START';
export const FETCH_WHATSAPP_STATUS_IMAGES_SUCCESS = 'FETCH_WHATSAPP_STATUS_IMAGES_SUCCESS';
export const FETCH_WHATSAPP_STATUS_IMAGES_FAIL = 'FETCH_WHATSAPP_STATUS_IMAGES_FAIL';

export const FETCH_WHATSAPP_STATUS_VIDEOS_START = 'FETCH_WHATSAPP_STATUS_VIDEOS_START';
export const FETCH_WHATSAPP_STATUS_VIDEOS_SUCCESS = 'FETCH_WHATSAPP_STATUS_VIDEOS_SUCCESS';
export const FETCH_WHATSAPP_STATUS_VIDEOS_FAIL = 'FETCH_WHATSAPP_STATUS_VIDEOS_FAIL';

