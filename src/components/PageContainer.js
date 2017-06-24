import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { View, StyleSheet } from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Export
PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;
export default PageContainer;
