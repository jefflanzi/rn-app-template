import React, { Component } from 'react';

// Components
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from './styles';

// PropTypes
const propTypes = { ...ActivityIndicator.propTypes };
const defaultProps = {
  animating: true,
  color: colors.primary.text,
  size: 'large',
  hidesWhenStopped: true,
};
// Class
class Spinner extends Component {
  render() {
    return <ActivityIndicator style={styles.container} {...this.props} />;
  }
}

// Exports
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
export default Spinner;

// Styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
