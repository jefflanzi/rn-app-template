import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { View, StyleSheet } from 'react-native';
import { colors } from './styles';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};
// Main
class PageContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.container.background,
  },
});

// Export
PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;
export default PageContainer;
