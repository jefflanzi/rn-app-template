import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, register } from '../actions/userActions';

// Components
import {
  Alert,
  Dimensions,
  Image,
  LayoutAnimation,
  StyleSheet,
  View,
} from 'react-native';
import { Button, PageContainer, TextInput } from '../components';

// Constants
const { width } = Dimensions.get('window');
const bgImage = require('../components/assets/loginBackground.jpg');
const logo = require('../components/assets/react-native-logo-white.png');

// Prop Types
const propTypes = {
  navigation: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
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
    isRegistering: false,
    forgotPassword: false,
  };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  login = () => {
    const { email, password } = this.state;
    const user = { email, password };
    Alert.alert('logging in');
    this.props.login(user);
  };

  register = () => {
    const { email, password, confirmPassword } = this.state;
    if (!(password === confirmPassword)) {
      Alert.alert('passwords must match');
      return false;
    }
    const user = { email, password };
    Alert.alert('registering new user');
    this.props.register(user);
    return true;
  };

  handleSubmit = () => {
    if (this.state.isRegistering) {
      this.register();
    } else {
      this.login();
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image style={styles.bgImage} source={bgImage} resizeMode="contain">
        <PageContainer containerStyle={styles.container}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <View style={styles.formContainer}>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder="email"
              containerStyle={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder="password"
              containerStyle={styles.input}
            />
            {this.state.isRegistering &&
              <TextInput
                value={this.state.confirmPassword}
                onChangeText={confirmPassword =>
                  this.setState({ confirmPassword })}
                placeholder="confirm password"
                containerStyle={styles.input}
              />}
          </View>
          <Button
            title={this.state.isRegistering ? 'Sign Up' : 'Login'}
            onPress={this.handleSubmit}
          />
          <Button
            title={this.state.isRegistering ? 'Login' : 'Register'}
            onPress={() =>
              this.setState({ isRegistering: !this.state.isRegistering })}
            variant="outline"
          />
          <Button
            title="Forgot Password?"
            onPress={() => navigate('Register')}
            variant="text"
          />
        </PageContainer>
      </Image>
    );
  }
}

// Exports
Login.propTypes = propTypes;
export default connect(null, { login, register })(Login);
// export default Login;

// Styles
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width,
  },
  container: {
    backgroundColor: 'transparent',
  },
  logo: {
    width: width * 0.9,
    justifyContent: 'flex-start',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    opacity: 0.7,
  },
});
