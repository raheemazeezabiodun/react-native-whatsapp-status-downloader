import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { H1 } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import Storage from 'react-native-simple-store';

import { styles } from './style';
import { createDirectory } from '../../utils/helpers';

const slides = [
    {
        key: 'Welcome',
        title: 'Welcome',
        text: 'This app allows you download whatsapp status without internet connection',
        image: require('../../images/1.jpg'),
        dotColor: '#000'
    },
    {
        key: 'Download',
        title: 'Step 1',
        text: 'To download any status \n you must have viewed the \n status on whatsapp.',
        image: require('../../images/2.png'),
    },
    {
        key: 'Download2',
        title: 'Step 2',
        text: 'After viewing it on whatsapp \n launch this app and the status will be \ available for download',
        image: require('../../images/3.jpg'),
    },
    {
        key: 'Directory',
        title: 'Folder',
        text: 'All status are downloaded into Downloads/whatsappStatusDownloader directory.',
        image: require('../../images/4.jpg'),
    },
    {
        key: 'Voice',
        title: 'Accessibility',
        text: 'You can download with your voice by saying \n Hey, Download all videos\n Hey, Download all images \n ' +
        'Hey Download All status (this will download both videos and images together)',
        image: require('../../images/5.jpg'),
    },
    {
        key: 'Credit',
        title: 'Credit',
        text: 'This app is built by Raheem Azeez Abiodun (raheezeez4@gmail.com)',
        image: require('../../images/1.jpg'),
    },
    {
        key: 'License',
        title: 'License',
        text: 'You can share this app with your friends but you are not allowed to sell it or claim ownership',
        image: require('../../images/2.png'),
    }
];


export default class IntroSlides extends React.Component {

    _renderItem = (props) => {
        return (
            <View>
                <ImageBackground source={props.image} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>{props.title}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionStyle}>{props.text}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="arrow-circle-right"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="check-square-o"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    _onDone = () => {
        Storage.save('introScreenSeen', true);
        createDirectory();
        this.props.navigation.navigate('Tab')
    };

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderItem={this._renderItem}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                onDone={this._onDone}
            />
        );
    }
}
