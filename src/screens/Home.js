import React, { Component } from 'react';

// Components
import { Text } from 'react-native';
import { PageContainer } from '../components';

// Class
class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
  };

  render() {
    return (
      <PageContainer>
        <Text>Home</Text>
      </PageContainer>
    );
  }
}

// Export
export default Home;
