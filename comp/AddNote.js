import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { IconButton, Button, Card } from 'react-native-paper';

import Dealer from '../Handler/Dealer'

export default function App(props) {
    const [text, setText] = useState('')

    const saveNote = async () => {
        const mainObj = await Dealer.getData();
        const newKey = 'k' + mainObj.data.length;
        const newValue = text;
        const newArray = mainObj.data;
        newArray.push({ "key": newKey, "value": newValue })
        const newStr = JSON.stringify({ "data": newArray });
        await Dealer.storeData(newStr)
    }



    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <TextInput placeholder='Enter your Note Here & Press Enter Button' onChangeText={
                    (text) => setText(text)
                } value={text} />
            </View>
            <View style={styles.lower}>
                <Button onPress={
                    () => {
                        saveNote().then(() => {
                            props.navigation.navigate('Home')
                            alert('Success')
                        }).catch((e) => {
                            console.log('Error Storing New Data');
                            alert('Failure\n' + e.message)
                        })
                    }
                }>
                    {'Save'}
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
    },
    upper: {
        flex: 8,
        padding: 10,
        backgroundColor: '#fff'
    },
    lower: {
        flex: 2,
        padding: 10,
        backgroundColor: '#fff'
    },
});
