import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// PropTypes
const propTypes = {
  scrollEnabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
const defaultProps = {
  scrollEnabled: false,
};

// Class
class KeyboardHandler extends Component {
  state = {
    keyboardVisible: false,
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      this.setState({ keyboardVisible: true }),
    );
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      this.setState({ keyboardVisible: false }),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardOpeningTime={0}
        scrollEnabled={this.props.scrollEnabled || this.state.keyboardVisible}
      >
        {this.props.children}
      </KeyboardAwareScrollView>
    );
  }
}

// Exports
KeyboardHandler.propTypes = propTypes;
KeyboardHandler.defaultProps = defaultProps;
export default KeyboardHandler;
