import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import ChatScreen from './ChatScreen'
import StatusScreen from './StatusScreen'
import CallScreen from './CallScreen'


export default InnerArea = () => {
    const Tab = createMaterialTopTabNavigator()
    return (

        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: '#075e54',
                marginBottom: 2
            },
            activeTintColor: 'white',
            inactiveTintColor: 'grey',

            style: {

            },

            labelStyle: {
                fontWeight: 'bold'
            },

            indicatorStyle: {
                backgroundColor: 'white'
            },

            indicatorContainerStyle: {
                backgroundColor: '#075e54'
            }

        }}>
            <Tab.Screen name="CHATS" component={ChatScreen} />
            <Tab.Screen name="STATUS" component={StatusScreen} />
            <Tab.Screen name="CALLS" component={CallScreen} />
        </Tab.Navigator>

    )
}
