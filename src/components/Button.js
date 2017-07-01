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
  variant: PropTypes.oneOf(['base', 'outline', 'text']),
};

const defaultProps = {
  disabled: false,
  buttonStyle: null,
  textStyles: null,
  variant: 'base',
};

// Component definition
export default function Button(props) {
  const { title, onPress, buttonStyle, textStyles, disabled, variant } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.container}
    >
      <View
        style={[
          styles.button,
          styles[variant],
          buttonStyle,
          disabled && styles.buttonDisabled,
        ]}
      >
        <Text style={[styles.buttonText, textStyles]}>
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
  container: {
    alignSelf: 'stretch',
    marginVertical: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.primary.text,
    backgroundColor: 'transparent',
  },
  button: {
    height: 44,
    borderRadius: 44 / 2,
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.2,
  },
  // Variants
  base: {
    backgroundColor: colors.primary.base,
    opacity: 1.0,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 3,
  },
  text: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
});
