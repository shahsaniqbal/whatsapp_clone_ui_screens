import React from 'react'
import { AsyncStorage } from 'react-native';

export default class Dealer extends React.Component {
    static getData = async () => {
        try {
            const value = await AsyncStorage.getItem('app_notes');
            console.log(value);

            if (value !== null) {
                const obj = await JSON.parse(value);
                return (obj !== null) ? obj : JSON.parse('{"data":[{"key":"k1", "value":"V1"}]}');
            }
            else {
                return JSON.parse('{"data":[{"key":"k1", "value":"V1"}]}')
            }
        } catch (error) {

        }
    }

    static storeData = async (dataStr) => {
        try {
            await AsyncStorage.clear()
            await AsyncStorage.setItem('app_notes', dataStr);
        } catch (error) {
            console.log(error)
        }
    };

    static demoAlert = () => {
        alert('Demo')
    }
    static clear = async () => {
        await AsyncStorage.clear()
    }
}