import React, { useState } from 'react';
import { AsyncStorage, FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { IconButton, Button, Card } from 'react-native-paper';
import AddNote from './AddNote'

import Dealer from '../Handler/Dealer'

const Layout = (props) => (
    <Card elevation={20} style={{ backgroundColor: '#fff', margin: 6, }}>
        <Card.Content>
            <Text style={{ color: 'black' }}>
                {props.v}
            </Text>
        </Card.Content>
    </Card >
)

const Home = ({ navigation }) => {
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [data, setData] = useState('')
    const [ref, setRef] = useState(false)
    const data2 = '{"data":[{ "key": "k1", "value": "V1" }]}'


    if (!isDataLoaded) {

        Dealer.getData().then((obj) => {
            try {
                str = JSON.stringify(obj)
                if (data == '') {
                    if (str != undefined) {
                        setData(str)
                    }
                    else {
                        setData(data2)
                    }
                }
                setIsDataLoaded(true)
            } catch (error) {
            }
        }).catch((err) => {

        })

        return (<View style={styles.container}>
            <Text>Notes Here</Text>
        </View>)
    }

    else {
        const arr = JSON.parse(data).data;
        return (
            <View style={styles.container}>
                <IconButton onPress={() => { setRef(true) }} color='black' icon='refresh' />
                <FlatList data={arr} renderItem={
                    ({ item }) => (
                        <Layout v={item.value} />
                    )
                } keyExtractor={
                    (item, index) => {
                        return item.key;
                    }
                } />
            </View>
        )
    }
}

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={({ navigation }) => {
                    return {
                        headerRight: () => (
                            <View style={{ flexDirection: 'row' }}>
                                <Button onPress={() => {
                                    navigation.navigate('AddNote')
                                }} style={{ marginRight: 3 }} color='black'>Add Note</Button>
                                <IconButton onPress={() => { Dealer.clear() }} color='black' icon='delete' />
                            </View>)
                    }
                }} />
                <Stack.Screen name='AddNote' component={AddNote} />
            </Stack.Navigator>
        </NavigationContainer>
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
});
