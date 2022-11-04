import React from 'react';
import { Text, TextInput, Button, View, Image, StyleSheet } from 'react-native';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Iniciar sesión</Text>
      <View style={styles.contentTop}>
        <Image style={styles.image} source={require('../../assets/img/login.png')} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        textContentType="password"
        secureTextEntry={true}
      />
      <View style={styles.contentTopButton}>
        <Button title="Iniciar" onPress={() => console.log("Enviado")} />
      </View>
    </View>
  );
}

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
    paddingTop: 10,
    paddingBottom: 30,
  },
  contentTopButton: {
    paddingTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 50,
  },
  input: {
    borderColor: '#18978F',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;
