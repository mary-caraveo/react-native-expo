import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Gree = (props) => {
  const { firstname, lastname } = props;

  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

Greet.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default Gree;
