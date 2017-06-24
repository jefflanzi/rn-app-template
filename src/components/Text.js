import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { StyleSheet, Text } from 'react-native';
import { colors, fonts } from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};
// Class
class CustomText extends Component {
  render() {
    return (
      <Text style={styles.default}>
        {this.props.children}
      </Text>
    );
  }
}

// Exports
CustomText.propTypes = propTypes;
export default CustomText;

// Styles
const styles = StyleSheet.create({
  default: {
    color: colors.content.text,
    ...fonts.body,
  },
});
