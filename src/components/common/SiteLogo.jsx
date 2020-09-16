import React from 'react';
import PropTypes from 'prop-types';

const SiteLogo = ({ url, logo }) => (
  <a className="site-logo" href={url} title="home">
    <img src={logo} alt="site logo" />
  </a>
);

// validating prop types
SiteLogo.propTypes = {
  url: PropTypes.string,
  logo: PropTypes.string,
};

// creating default props
SiteLogo.defaultProps = {
  url: '/',
  logo: '',
};

export default SiteLogo;
