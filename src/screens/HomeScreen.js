import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'

const HomeScreen = (props) => {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
    </SafeAreaView>
  );
}

export default HomeScreen;
