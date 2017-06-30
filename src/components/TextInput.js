import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { colors } from './styles';

// PropTypes
const propTypes = {
  ...TextInput.propTypes,
  textStyle: Text.propTypes.style,
};
const defaultProps = {
  textStyle: {},
  placeholder: 'Enter text here',
};

// Class
class CustomTextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={this.props.placeholder}
          placeholderTextColor={colors.content.textSecondary}
          onChange={this.props.onChange}
          style={[styles.input, this.props.textStyle]}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

// Export
CustomTextInput.propTypes = propTypes;
CustomTextInput.defaultProps = defaultProps;
export default CustomTextInput;

// Styles
const styles = StyleSheet.create({
  container: {
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
});
