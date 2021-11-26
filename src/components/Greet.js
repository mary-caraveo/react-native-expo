import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Greet(props) {
  // const { firstname="Guadalupe", lastname="Caraveo" } = props;
  const { firstname, lastname } = props;

  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  )
}

// Greet.defaultProps = {
//   firstname: "Guadalupe",
//   lastname: "Caraveo"
// };

Greet.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}