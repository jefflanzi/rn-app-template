import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from './styles';

// PropTypes
const propTypes = {
  ...TextInput.propTypes,
  textStyle: Text.propTypes.style,
  containerStyle: View.propTypes.style,
  validation: PropTypes.func,
};
const defaultProps = {
  textStyle: {},
  containerStyle: {},
  placeholder: 'Enter text here',
  validation: null,
};

// Class
class CustomTextInput extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <TextInput
          autoCapitalize="none"
          placeholder={this.props.placeholder}
          placeholderTextColor={colors.content.textSecondary}
          onChange={this.props.onChange}
          style={[styles.input, this.props.textStyle]}
          onChangeText={this.props.onChangeText}
          {...this.props}
        />
        {this.props.validation &&
          <View style={styles.iconContainer}>
            <ValidationIcon isValid={this.props.validation(this.props.value)} isError={false} />
          </View>}
      </View>
    );
  }
}

// Helper Components
const ValidationIcon = ({ isValid = false, isError = false }) => {
  let config;
  if (isValid) config = { name: 'check', color: 'green' };
  if (isError) config = { name: 'clear', color: 'red' };

  if (isValid || isError) {
    return (
      <View style={[styles.iconContainer, { borderColor: config.color }]}>
        <Icon size={20} name={config.name} color={config.color} />
      </View>
    );
  }
  return null;
};
ValidationIcon.propTypes = {
  isValid: PropTypes.bool,
  isError: PropTypes.bool,
};
ValidationIcon.defaultProps = {
  isValid: false,
  isError: false,
};

// Export
CustomTextInput.propTypes = propTypes;
CustomTextInput.defaultProps = defaultProps;
export default CustomTextInput;

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginVertical: 5,
    height: 44,
    borderRadius: 44 / 2,
    paddingHorizontal: 44 / 2,
    backgroundColor: colors.content.background,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    fontSize: 14,
    color: colors.content.text,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary.light,
  },
  icon: {
    backgroundColor: 'transparent',
  },
});
