import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors } from './styles';

// PropTypes
const propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  buttonStyle: View.propTypes.style,
  textStyles: Text.propTypes.style,
};

const defaultProps = {
  disabled: false,
  buttonStyle: null,
  textStyles: null,
};

// Component definition
export default function Button(props) {
  const { title, onPress, buttonStyle, textStyles, disabled } = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[styles.button, buttonStyle, disabled && styles.buttonDisabled]}
      >
        <Text style={[styles.text, textStyles]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// Eport
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: colors.primary,
    opacity: 1.0,
    height: 44,
    borderRadius: 44 / 2,
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.2,
  },
});
