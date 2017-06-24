import React, { Component } from 'react';

// Components
import { Button, PageContainer, Text } from '../components';

// Main Class
class Login extends Component {
  render() {
    return (
      <PageContainer>
        <Text>Login</Text>
        <Button title="login" />
        <Button title="register" />
      </PageContainer>
    );
  }
}

// Exports
export default Login;
