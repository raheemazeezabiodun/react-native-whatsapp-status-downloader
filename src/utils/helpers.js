import RNFetchBlob from 'react-native-fetch-blob';


const dirs = RNFetchBlob.fs.dirs;

export function getWhatsappStatusDirectory() {
    return dirs.SDCardDir + '/whatsapp/media/.statuses';
}

function getStatusImages() {

}

function getStatusVideos() {

}