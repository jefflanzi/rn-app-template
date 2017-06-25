import React, { Component } from 'react';

import { View } from 'react-native';
import Router from './Router';
import { StatusBar } from './components';

export default class appTemplate extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Router />
      </View>
    );
  }
}
