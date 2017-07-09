import React from 'react';
import { connect } from 'react-redux';

// Components
import { Spinner } from '../components';

// Class
const GlobalSpinner = ({ spinner }) => spinner && <Spinner animating />;

// Exports
export default connect(({ spinner }) => ({ spinner }))(GlobalSpinner);
