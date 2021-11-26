import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greet from './src/components/Greet';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native</Text>
      <Greet name="Guadalupe" />
      <Greet name="Carlos" />
      <Greet name="Octavia" />
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
