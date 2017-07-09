import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, register, showSpinner, hideSpinner } from '../actions';
import * as validate from '../util/validate';

// Components
import { Alert, Dimensions, Image, LayoutAnimation, StyleSheet, View } from 'react-native';
import { Button, KeyboardHandler, PageContainer, TextInput } from '../components';

// Constants
const { width } = Dimensions.get('window');
const bgImage = require('../components/assets/loginBackground.jpg');
const logo = require('../components/assets/react-native-logo-white.png');

// Prop Types
const propTypes = {
  navigation: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  showSpinner: PropTypes.func.isRequired,
  hideSpinner: PropTypes.func.isRequired,
};

// Main Class
class Login extends Component {
  static navigationOptions = {
    header: null,
    title: 'Login',
  };

  constructor() {
    super();
    this.inputRefs = {};
  }

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    isRegistering: false,
    forgotPassword: false,
    keyboard: false,
    error: {
      email: false,
      password: false,
      confirmPassword: false,
    },
  };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  getSubmitButtonText = () => {
    const { isRegistering, forgotPassword } = this.state;
    if (isRegistering) return 'Sign Up';
    if (forgotPassword) return 'Recover Password';
    return 'Login';
  };

  focusInput = (input) => {
    const target = this.inputRefs[input];
    if (target) target.textInput.focus();
  };

  validateInputs = () => {
    const fields = Object.keys(this.inputRefs).filter(key => !!this.inputRefs[key]).map((key) => {
      const { validation, value } = this.inputRefs[key].props;
      return validation(value);
    });
    return !fields.map(field => !!field).includes(false);
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const validation = this.validateInputs();
    if (!validation) {
      Alert.alert('Invalid email or password');
      return false;
    }
    const user = { email, password };
    this.props.showSpinner();
    this.props.login(user);
    setTimeout(() => {
      this.props.hideSpinner();
      this.props.navigation.navigate('Home');
    }, 500);
    return true;
  };

  handleRegister = () => {
    const { email, password, confirmPassword } = this.state;
    if (!(password === confirmPassword)) {
      Alert.alert('passwords must match');
      return false;
    }
    const validation = this.validateInputs();
    if (!validation) {
      Alert.alert('Invalid email or password');
      return false;
    }
    const user = { email, password };
    Alert.alert('registering new user');
    this.props.register(user);
    return true;
  };

  forgotPassword = () => {
    const validation = this.validateInputs();
    if (!validation) {
      Alert.alert('Invalid email');
      return false;
    }
    Alert.alert('Recovery email sent');
    return true;
  };

  handleSubmit = () => {
    if (this.state.isRegistering) {
      this.handleRegister();
    } else if (this.state.forgotPassword) {
      this.forgotPassword();
    } else {
      this.handleLogin();
    }
  };

  render() {
    return (
      <Image style={styles.bgImage} source={bgImage} resizeMode="contain">
        <KeyboardHandler>
          <PageContainer containerStyle={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.formContainer}>
              {/* email */}
              <TextInput
                ref={ref => (this.inputRefs.email = ref)}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="email"
                containerStyle={styles.input}
                keyboardType="email-address"
                returnKeyType={this.state.forgotPassword ? 'done' : 'next'}
                validation={validate.email}
                onSubmitEditing={() => this.focusInput('password')}
              />
              {/* password */}
              {!this.state.forgotPassword &&
                <TextInput
                  ref={ref => (this.inputRefs.password = ref)}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder="password"
                  containerStyle={styles.input}
                  secureTextEntry
                  returnKeyType={this.state.isRegistering ? 'next' : 'done'}
                  validation={validate.password}
                  onSubmitEditing={() => this.focusInput('confirmPassword')}
                />}
              {/* confirmPassword */}
              {this.state.isRegistering &&
                <TextInput
                  ref={ref => (this.inputRefs.confirmPassword = ref)}
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
        </KeyboardHandler>
      </Image>
    );
  }
}

// Exports
Login.propTypes = propTypes;
export default connect(null, { login, register, showSpinner, hideSpinner })(Login);
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
