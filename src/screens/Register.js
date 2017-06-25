import React, { Component } from 'react';

// Components
import { Text } from 'react-native';
import { PageContainer } from '../components';

// Main
class Register extends Component {
  static navigationOptions = {
    title: 'Register',
  };

  render() {
    return (
      <PageContainer>
        <Text>Register</Text>
      </PageContainer>
    );
  }
}

// Exports
export default Register;
