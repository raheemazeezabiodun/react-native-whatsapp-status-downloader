import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 320,
        height: 320,
    }
});

const slides = [
    {
        key: 'Welcome',
        title: 'Welcome',
        text: 'Description.\nSay something cool',
        image: require('../../images/1.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#59b2ab',
    },
    {
        key: 'Download',
        title: 'Save',
        text: 'Other cool stuff',
        image: require('../../images/3.jpeg'),
        imageStyle: styles.image,
        backgroundColor: '#febe29',
    },
    {
        key: 'Filter',
        title: 'Filter',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../images/1.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#22bcb5',
    },
    {
        key: 'Voice',
        title: 'Voice',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../images/1.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#22bcb5',
    },
    {
        key: 'Voice',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../images/1.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#22bcb5',
    }
];


export default class IntroSlides extends React.Component {
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
        this.props.navigation.navigate('Tab')
    }

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                onDone={this._onDone}
            />
        );
    }
}
