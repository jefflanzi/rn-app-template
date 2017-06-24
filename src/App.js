import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';
import Router from './Router';
import { colors } from './components/styles';

export default class appTemplate extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <Router />
      </View>
    );
  }
}
