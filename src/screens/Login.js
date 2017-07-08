import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, register } from '../actions/userActions';
import * as validate from '../util/validate';

// Components
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
    keyboard: false,
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = () => {
    this.setState({ keyboard: true });
  };

  keyboardDidHide = () => {
    this.setState({ keyboard: false });
  };

  getSubmitButtonText = () => {
    const { isRegistering, forgotPassword } = this.state;
    if (isRegistering) return 'Sign Up';
    if (forgotPassword) return 'Recover Password';
    return 'Login';
  };

  login = () => {
    const { email, password } = this.state;
    const user = { email, password };
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

  forgotPassword = () => {
    Alert.alert('send forgot password email');
  };

  handleSubmit = () => {
    if (this.state.isRegistering) {
      this.register();
    } else if (this.state.forgotPassword) {
      this.forgotPassword();
    } else {
      this.login();
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    return (
      <Image style={styles.bgImage} source={bgImage} resizeMode="contain">
        <KeyboardAwareScrollView scrollEnabled={this.state.keyboard} keyboardOpeningTime={0}>
          <PageContainer containerStyle={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.formContainer}>
              <TextInput
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="email"
                containerStyle={styles.input}
                keyboardType="email-address"
                returnKeyType="next"
                validation={validate.email}
              />
              {// Password Field
              !this.state.forgotPassword &&
                <TextInput
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder="password"
                  containerStyle={styles.input}
                  secureTextEntry
                  returnKeyType={this.state.isRegistering ? 'next' : 'done'}
                  validation={validate.password}
                />}
              {this.state.isRegistering &&
                <TextInput
                  value={this.state.confirmPassword}
                  onChangeText={confirmPassword => this.setState({ confirmPassword })}
                  placeholder="confirm password"
                  containerStyle={styles.input}
                  secureTextEntry
                  returnKeyType="done"
                  validation={value => validate.password(value) && value === this.state.password}
                />}
            </View>
            <Button title={this.getSubmitButtonText()} onPress={this.handleSubmit} />
            {!this.state.forgotPassword &&
              <Button
                title={this.state.isRegistering ? 'Login' : 'Register'}
                onPress={() =>
                  this.setState({
                    isRegistering: !this.state.isRegistering,
                    forgotPassword: false,
                  })}
                variant="outline"
              />}
            <Button
              title={this.state.forgotPassword ? 'Login' : 'Forgot Password?'}
              onPress={() =>
                this.setState({
                  forgotPassword: !this.state.forgotPassword,
                  isRegistering: false,
                })}
              variant="text"
            />
          </PageContainer>
        </KeyboardAwareScrollView>
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
