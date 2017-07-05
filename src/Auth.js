import { Component } from 'react';
import { connect } from 'react-redux';

class Auth extends Component {
  render() {
    return null;
  }
}

// Exports
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Auth);
