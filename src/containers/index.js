import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { View, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import Splash from '../../src/components/Splash';
import AppIntroSlider from '../../src/components/AppIntro/slides';
import { Tab } from '../../src/containers/tabs';


export const MainNavigation = StackNavigator({
    Home: {
        screen: Splash,
        navigationOptions: ({ navigation }) => { return ({ header: null }) }
    },
    AppIntro: {
        screen: AppIntroSlider,
        navigationOptions: ({ navigation }) => { return ({ header: null }) }
    },
    Tab: {
        screen: Tab,
        navigationOptions: ({ navigation }) => { return ({ header: null }) }
    }
});


// hook the main navigation with redux
class MainNavigationWithState extends Component {

    // componentDidMount() {
    //     // BackHandler.addEventListener('backPress', () => {
    //     //     const { dispatch, nav } = this.props;
    //     //     if (this.shouldCloseApp(nav)) return false;
    //     //     dispatch({
    //     //         type: 'Navigation/BACK'
    //     //     });
    //     //     return true;
    //     // });
    // }
    //
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('backPress');
    // }
    //
    // shouldCloseApp = (nav) => {
    //     return nav.index === 0;
    // };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MainNavigation navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigationWithState);