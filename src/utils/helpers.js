import RNFetchBlob from 'react-native-fetch-blob';
import { Toast } from 'native-base';
import { DIRECTORY_NAME } from '../constants';


const dirs = RNFetchBlob.fs.dirs;

export function getWhatsappStatusDirectory() {
    return dirs.SDCardDir + '/whatsapp/media/.statuses';
}

export function getDownloadDirectory() {
    return dirs.DownloadDir
}

export function getWhatsappStatusFiles() {
    let status = [];
    RNFetchBlob.fs.ls(getWhatsappStatusDirectory())
        .then(data => {
            status = data
        }).catch(error => {
            console.log(error)
    });
    return status
}

export function downloadFiles(file_path, file_name) {
    // download file and confirm it is saved
    console.log(file_path);
    RNFetchBlob.fs.cp(file_path, `${getDownloadDirectory()}/${DIRECTORY_NAME}/${file_name}`)
        .then((exist) => {
            console.log(file_path, exist);

            Toast.show({
                text: 'File saved in downloads folder ',
                position: 'bottom',
                buttonText: 'Okay',
                type: 'success'
            })
        }).catch((error) => {
            Toast.show({
                text: 'File not saved',
                position: 'bottom',
                buttonText: 'Okay',
                type: 'danger'
            })
    });
}

export function createDirectory() {
    return RNFetchBlob.fs.mkdir(`${getDownloadDirectory()}/${DIRECTORY_NAME}`);
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];
        return reducer ? reducer(state, action.payload) : state;
    };
}
