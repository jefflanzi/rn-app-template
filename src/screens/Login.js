import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, PageContainer, Text, TextInput } from '../components';

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

  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <PageContainer>
        <Text>Login</Text>
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="email"
        />
        <TextInput
          value={this.state.email}
          onChangeText={password => this.setState({ password })}
          placeholder="password"
        />
        <TextInput
          value={this.state.email}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          placeholder="confirm password"
        />
        <Button title="Login" onPress={() => navigate('Home')} />
        <Button title="Register" onPress={() => navigate('Register')} />
      </PageContainer>
    );
  }
}

// Exports
Login.propTypes = propTypes;
export default Login;
