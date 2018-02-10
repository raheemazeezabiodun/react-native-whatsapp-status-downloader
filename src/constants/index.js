import { Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'


const dirs = RNFetchBlob.fs.dirs;
export const SDCARD_DIR = Platform.OS === 'android' ? dirs.SDCardDir: '';

export const DEV_MODE = true;
