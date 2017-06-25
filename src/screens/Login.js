import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, PageContainer, Text } from '../components';

// Prop Types
const propTypes = {
  navigation: PropTypes.object.isRequired,
};

// Main Class
class Login extends Component {
  static navigationOptions = {
    header: null,
    // title: 'Login',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <PageContainer>
        <Text>Login</Text>
        <Button title="login" onPress={() => navigate('Home')} />
        <Button title="register" onPress={() => navigate('Register')} />
      </PageContainer>
    );
  }
}

// Exports
Login.propTypes = propTypes;
export default Login;
