import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon } from 'native-base';
import { reateTabNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name='ios-camera-outline' style={{ paddingLeft: 10 }} />,
        title: 'Instagram',
        headerRight: <Icon name='ios-send-outline' style={{ paddingRight: 10 }} />,
    }

    render() {
        return (
            <AppTabNavigator />
        );
    }
}
export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
    HomeTab,
    SearchTab,
    AddMediaTab,
    LikesTab,
    ProfileTab,
  })


  /*
const AppTabNavigator = createTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    Search: {
        screen: SearchTab
    },
    AddMedia: {
        screen: AddMediaTab
    },
    Likes: {
        screen: LikesTab
    },
    Profile: {
        screen: ProfileTab
    }
},
 {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
           
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
    }
})
 
*/


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

