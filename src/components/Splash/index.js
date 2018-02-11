import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, H1, Text } from 'native-base';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Storage from 'react-native-simple-store';

import * as statusActions from '../../actions/getStatus';
import { styles } from './styles';


class Splash extends Component {

    componentDidMount() {
        this.props.statusActions.fecthWhatsappStatus();
        setTimeout(() => {
            this.decideNextScreen();
        }, 1000)

    }

    decideNextScreen = () => {
        Storage.get('introScreenSeen')
            .then((introScreenSeen) => {
                if (introScreenSeen) {
                    this.props.navigation.navigate('AppIntro');
                } else {
                    this.props.navigation.navigate('AppIntro');
                }
            })
    };

    render() {
        return (
            <Container>
                    <View style={styles.container}>
                        <H1 style={styles.welcome}>
                            Whatsapp Status Downloader
                        </H1>
                    </View>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Developed by raheemazeez4@gmail.com</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        statusActions: bindActionCreators(statusActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
