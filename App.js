import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greet from './src/components/Greet';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native</Text>
      <Greet firstname="Andrea" lastname={28}/>
      <Greet firstname="Carolina" lastname="Lara" />
      {/* <Greet firstname="Victoria" lastname="Cabrera" /> */}
      <StatusBar style="auto" />
    </View>
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
