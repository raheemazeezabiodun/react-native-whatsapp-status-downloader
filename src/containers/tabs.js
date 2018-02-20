import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Index from './Home';
import Videos from './Home/videos';
import NotSaved from './NotSaved';


export const Tab = TabNavigator({
    Index: {
        screen: Index,
        navigationOptions: ({ navigation }) => ({
            title: 'Images',
        }),
    },
    Videos: {
        screen: Videos,
        navigationOptions: ({ navigation }) => ({
            title: 'Videos',
        }),
    }
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Index') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Saved') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            } else if (routeName === 'NotSaved') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
});
