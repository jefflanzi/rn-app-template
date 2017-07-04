import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import { colors } from './styles';

export default class CustomStatusBar extends Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <StatusBar
          backgroundColor={colors.primary.dark}
          barStyle="light-content"
        />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  statusBar: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 20 : 0,
    // backgroundColor: colors.primary.dark,
  },
});
