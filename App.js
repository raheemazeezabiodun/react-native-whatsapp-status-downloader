import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import configureStore from './src/stores/configurestore.dev';
import { MainNavigation } from './src/containers';

const store = configureStore();

export default class WhatsappDownloader extends Component {

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <MainNavigation />
                </Root>
            </Provider>
        );
    }
}