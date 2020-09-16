import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/style.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Template from './components/layouts/Pages/Template';

const App = ({ className }) => (
  <Router>
    <div className={`page ${className}`}>
      <Header />
      <Template />
      <Footer />
    </div>
  </Router>
);

// validating prop types
App.propTypes = {
  className: PropTypes.string,
};

// creating default props
App.defaultProps = {
  className: 'section',
};

const mapStateToProps = (state) => (
  { className: state.className }
);

export default connect(mapStateToProps)(App);
