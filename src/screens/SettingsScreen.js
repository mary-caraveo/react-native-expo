import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SettingsScreen(props) {
  const {navigation} = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }
  return (
    <View>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a Home" />
    </View>
  )
}
