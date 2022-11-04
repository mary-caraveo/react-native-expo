import React from 'react';
import { View, Image, Button, SafeAreaView, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentTop}>
        <Image style={styles.image} source={require('../../assets/img/setting.png')} />
      </View>
      <View style={styles.contentTop} >
        <Button onPress={goToSettings} title="Ir a Ajustes" />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

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
