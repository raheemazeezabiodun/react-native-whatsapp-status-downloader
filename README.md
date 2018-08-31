# react-native-whatsapp-status-downloader

A react native app for downloading whatsapp status

I decided to create this app when my friend posted a very funny video on his whatsapp status.

Whatsapp status files is located in */Whatsapp/media/.statuses* directory

This project crawls throughout the directory with the help of `react-native-fetch-blob`

Running locally <br />
```sh
 git clone https://github.com/raheemazeezabiodun/react-native-whatsapp-status-downloader.git
 cd react-native-whatsapp-status-downloader
 npm install
```

create a [fabric](https://fabric.io) api key for handling crashes and add it to `Android/app/src/main/AndroidManifest.xml` file

Bundle the apk together with 
```sh
npm run bundle-android
```

Star this project if you like it.

Created by Raheem Azeez Abiodun([@raheemazeezabiodun](https://github.com/raheemazeezabiodun)).
