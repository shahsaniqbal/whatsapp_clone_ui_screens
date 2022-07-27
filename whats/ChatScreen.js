import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, FlatList } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import ActionButton from 'react-native-action-button';

const Layout = (props) => {
    return (
        <Card style={{ backgroundColor: '#fff1f1' }}>
            <View style={{ height: 70, padding: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar.Image size={50} source={{ uri: props.imgLink }} />
                </View>
                <View style={{ flex: 5, flexDirection: 'column', justifyContent: 'center', paddingLeft: 5 }}>

                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>
                        {props.username}
                    </Text>
                    <Text>
                        {props.mesV}
                    </Text>

                </View>

            </View>
        </Card >
    )
}

export default function App() {

    const [manager, setMan] = useState(new Array())
    const demoArr = [
        {
            name: {
                title: 'Mr.',
                first: 'Ahsan',
                last: 'Iqbal'
            },
            picture: {
                thumbnail: 'https://i.ytimg.com/vi/-TSniF709fs/mqdefault.jpg'
            },
            email: 'ok@ok.com'
        }
    ];

    if (manager.length < 1) {
        fetch('https://randomuser.me/api/?results=10', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((data) => data.json()).then((data2) => {
            console.log(manager)
            setMan(data2.results)

        }).catch(err => {
            alert("Error\n" + err.message)
        })
    }

    else {
        return (
            <View style={styles.container}>

                <FlatList data={manager} renderItem={({ item }) => (
                    <Layout
                        username={`${item.name.title} ${item.name.first} ${item.name.last}`}
                        imgLink={item.picture.thumbnail}
                        mesV='Hey! When will you come?' />
                )} keyExtractor={(item, index) => item.email}>

                </FlatList>

                <ActionButton
                    buttonColor="rgba(0,233,0,1)"
                    onPress={() => { console.log("hi") }}
                    active={true}
                    position='right'
                    renderIcon={() => (
                        <Avatar.Icon icon='message' size={34} backgroundColor='transparent' />
                    )}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <FlatList data={demoArr} renderItem={({ item }) => (
                <Layout
                    username={`${item.name.title} ${item.name.first} ${item.name.last}`}
                    imgLink={item.picture.thumbnail}
                    mesV='Hey! When will you come?' />
            )} keyExtractor={(item, index) => item.email}>

            </FlatList>

            <ActionButton
                buttonColor="rgba(0,233,0,1)"
                onPress={() => { console.log("hi") }}
                active={true}
                position='right'
                renderIcon={() => (
                    <Avatar.Icon icon='message' size={34} backgroundColor='transparent' />
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
