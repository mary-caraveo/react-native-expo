import React from 'react';
import { Text } from 'react-native';

export default function Greet(props) {
  const { name } = props;

  return (
    <Text>
      Hola {name}
    </Text>
  )
}
