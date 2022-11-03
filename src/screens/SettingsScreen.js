import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';

const SettingsScreen = (props) => {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a Home" />
    </SafeAreaView>
  );
}

export default SettingsScreen;
