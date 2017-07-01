import React, { Component } from 'react';

import { View } from 'react-native';
import Router from './Router';
import { StatusBar } from './components';

// Hard to see where this is coming from, but appears many libraries need to update this
console.ignoredYellowBox = ['Warning: checkPropTypes'];

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
