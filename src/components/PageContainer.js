import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { View, StyleSheet } from 'react-native';
import { colors } from './styles';

// PropTypes
const propTypes = {
  children: PropTypes.node,
  containerStyle: View.propTypes.style,
};
const defaultProps = {
  children: null,
  containerStyle: {},
};
// Main
class PageContainer extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.container.background,
  },
});

// Export
PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;
export default PageContainer;
