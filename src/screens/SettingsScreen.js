import React from 'react';
import { View, Image, Button, SafeAreaView, StyleSheet } from 'react-native';

const SettingsScreen = (props) => {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentTop}>
        <Image style={styles.image} source={require('../../assets/img/home.png')} />
      </View>
      <View style={styles.contentTop}>
        <Button onPress={() => goToPage("Home")} title="Ir a Home" />
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    width: 300,
    height: 200,
  },
  contentTop: {
    paddingTop: 40,
  }
});