import React, { Component } from 'react';

import { View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import { StatusBar } from './components';
import createStore from './store';

// Hard to see where this is coming from, but appears many libraries need to update this
console.ignoredYellowBox = ['Warning: checkPropTypes'];

export default class appTemplate extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <View style={{ flex: 1 }}>
          <StatusBar />
          <Router />
        </View>
      </Provider>
    );
  }
}
