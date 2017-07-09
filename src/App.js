import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { View } from 'react-native';
import Auth from './Auth';
import Router from './Router';
import { StatusBar } from './components';
import { GlobalSpinner } from './containers';
import createStore from './store';

// Hard to see where this is coming from, but appears many libraries need to update this
console.ignoredYellowBox = ['Warning: checkPropTypes'];

export default class appTemplate extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <View style={{ flex: 1 }}>
          <Auth />
          <StatusBar />
          <Router />
          <GlobalSpinner />
        </View>
      </Provider>
    );
  }
}
