import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import InnerArea from './whats/InnerArea'
import { IconButton } from 'react-native-paper';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#075e54', elevation: 0 }, headerTintColor: 'white' }}>
        <Stack.Screen name='WhatsApp' component={InnerArea} options={{
          headerRight: () => {
            return <View style={{ flexDirection: 'row' }}>
              <IconButton icon='magnify' color='white' onPress={() => { }} />
              <IconButton icon='dots-vertical' color='white' onPress={() => { }} />
            </View>
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
