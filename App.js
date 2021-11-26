import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Greet from './src/components/Greet';


export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text>React native</Text>
      <Greet firstname="Andrea" lastname={28}/>
      <Greet firstname="Carolina" lastname="Lara" />
      {/* <Greet firstname="Victoria" lastname="Cabrera" /> */}
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
